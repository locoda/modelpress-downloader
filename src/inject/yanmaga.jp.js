const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const messaging = require("../messaging");

const getImg = function (dom) {
    return {url: dom.src, filename: dom.dataset.name};
}

const getFolderName = function () {
    return window.location.host
        + window.location.pathname
            .split("/")
            .slice(1, 4)
            .join("-")
        + "/";
}
const inject = function () {
    let o = require("./return-message.js").init();
    o.folder = getFolderName();

    if (helper.getDataDiv() != null) {
        utils.pushArray(o.images,
            utils.findDomsWithCssSelector(
                helper.getDataDiv(),
                "img",
                getImg
            )
        );
    } else {
        o.scan = true;
    }

    return o;
};

/**
 * Runs in content script
 */
const scan = function () {
    // setup update listener
    messaging.relayMsgToRuntime("updateImage", function (msg){
        console.log("Relaying message...");
        msg.image.folder = getFolderName();
    });
    // window.addEventListener("message", function(event) {
    //     if (event.source !== window) {
    //         return;
    //     }
    //
    //     if (event.data.type && (event.data.type === "FROM_PAGE")) {
    //         // console.log("Content script received: " + JSON.stringify(event.data.image));
    //         let image = event.data.image;
    //         image.folder = getFolderName();
    //         chrome.runtime.sendMessage({what: "updateImage", image: image});
    //     }
    // }, false);

    utils.injectScriptDOM(chrome.runtime.getURL("helper/yanmaga-cache.js"));
}

module.exports = {
    inject: inject,
    scan: scan,
    host: "yanmaga.jp",
    hidden: true,
    getImg: getImg
};