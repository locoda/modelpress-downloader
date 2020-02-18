const m = require("../utils.js");
const inject = function() {
    let o = require("./return-message.js").init();

    m.pushArray(o.images, m.findImagesOfClass("square").map(m.filterTrailingResolutionNumbers));
    m.pushArray(o.images, m.findImagesOfContainerClass("list-photo").map(m.filterTrailingResolutionNumbers));
    m.pushArray(o.images, m.findImagesOfClass("figure").map(m.filterTrailingResolutionNumbers));
    m.pushArray(o.images, m.findImagesOfContainerClass("figure-list").map(m.filterTrailingResolutionNumbers));
    m.pushArray(o.images, m.findImagesOfClass("headline-photo").map(m.filterTrailingResolutionNumbers));
    m.pushArray(o.images, m.findImagesOfContainerClass("no-moki").map(m.filterTrailingResolutionNumbers));
    m.pushArray(o.images, m.findImagesOfContainerClass("snap-content").map(m.filterTrailingResolutionNumbers));

    let mobileImages =  m.findImagesWithCssSelector(document, ".m-appImageList img", m.removeQuery).map(m.filterTrailingResolutionNumbers);
    if (mobileImages.length > 0) {
        m.pushArray(o.images, mobileImages);
        let articleId = m.findMdprArticleId();
        if (articleId) {
            o.remoteImages["mdpr.jp"] = articleId;
        }
    }

    return o;
};

module.exports = {
    inject: inject,
    host: function (host) {
        return host === "mdpr.jp" || host.endsWith(".mdpr.jp");
    }
};