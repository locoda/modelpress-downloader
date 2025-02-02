const utils = require("../utils.js");
const messaging = require("../messaging");
const logger = require("../logger2")(module.id);
const ImageLoader = require("./binb.bricks.pub/image-loader");
const PtimgPreCombinedDelegator = require("./binb.bricks.pub/ptimg-pre-combined-delegator");
const Descrambler = require("./binb.bricks.pub/descrambler");
// cache
const data = window.midData = window.midData || [];
const descrambler = new Descrambler();

function addToDataIfNew(dom) {
    let src = dom.getAttribute("src");
    let url = descrambler.getImageUrl(src);
    let filename = dom.getAttribute("id") + "." + src.split("\.").at(-1);
    if (!data.find(i => i.filename === filename)) {
        let item = {
            url: url,
            dom: null,
            src: src,
            orgwidth: parseInt(dom.getAttribute("orgwidth")),
            orgheight: parseInt(dom.getAttribute("orgheight")),
            filename: filename,
            promise: null
        };
        item.promise = new Promise(function (resolve) {
            item.dom = document.createElement("img");
            item.dom.crossOrigin = "anonymous";
            item.dom.onload = function (){
                resolve(item);
            };
            item.dom.src = url;
        });
        logger.debug(item);
        data.push(item);
    }
    return {
        url: url,
        filename: filename,
        type: "msg"
    };
}

function descramble(imgDom, src, width, height, callback) {
    let delegator = new PtimgPreCombinedDelegator(imgDom.src, width, height, null, function (t) {
        logger.debug("in callback delegator=", delegator, "t=", t);
        return descrambler.getImageDescrambleCoords(src, t.width, t.height);
    });

    logger.debug("delegator=", delegator);
    logger.debug("delegator.getPreloadImages=", delegator.getPreloadImages());

    let preloadImages = delegator.getPreloadImages();
    let preloadImage = preloadImages["i"];
    logger.debug("preloadImage.srcs=", preloadImage.srcs);
    let loader = new ImageLoader();
    loader.rebuild(preloadImage.callback, imgDom, width, height).then(function (canvas){
        callback(canvas.toDataURL("image/jpeg", 1));
    }, function (e) {
        logger.error(e);
    });
}

function registerEventListener() {
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        if (msg.filename) {
            for (const image of data) {
                if (image.filename === msg.filename) {
                    image.promise.then(function () {
                        function callback(dataUrl){
                            image.dataUrl = dataUrl;
                            logger.debug("sending getImageUrl response image.filename=", image.filename,
                                "msg.filename=", msg.filename,
                                "image.dataUrl.length=", image.dataUrl && image.dataUrl.length);
                            sendResponse({
                                url: image.dataUrl,
                                filename: msg.filename
                            });
                        }
                        if (image.dataUrl) {
                            callback(image.dataUrl);
                        } else {
                            descramble(image.dom, image.src, image.orgwidth, image.orgheight, callback);
                        }
                    });
                    return true; // async response
                }
            }

        }
    });
}

module.exports = {
    inject: function () {
        registerEventListener();
        let o = require("./return-message.js").init();
        let content = document.querySelector("#content");
        if (content && content.dataset["ptbinb"] && content.dataset["ptbinbCid"]) {
            o = require("./return-message.js").loading();
            descrambler.init(content.dataset["ptbinb"], content.dataset["ptbinbCid"]).then(function (ttx) {
                let template = document.createElement('template');
                template.innerHTML = ttx;
                utils.pushArray(o.images,
                    utils.findDomsWithCssSelector(
                        template.content,
                        [
                            "t-img",
                        ].join(","),
                        addToDataIfNew
                    )
                );
                o.folder = window.location.host + "-" + window.document.title.replace(/\//g, "-") +  "/";
                messaging.sendToRuntime("updateResult", o);
            }, function (e) {
                logger.error(e);
                messaging.sendToRuntime("updateResult", require("./return-message.js").init());
            });
        }
        return o;
    },
    host: "binb.bricks.pub",
};
