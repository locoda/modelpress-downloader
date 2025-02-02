const inject = function () {
    const site = getSiteModule();
    if (site != null) {
        return site.inject();
    } else {
        return require("./inject/return-message.js").notSupported();
    }
}

/**
 * Returns the module of the current website.
 * @returns {null|{}}
 */
const getSiteModule = function () {
    try {
        return require("./inject/" + require("./inject/hostMapping").check(window.location));
    } catch (e) {
        // not found
        if (require("./is-dev")) {
            console.error(e);
        }

        return null;
    }
};

/**
 * Injects "inject-cs.js" file.
 * @param chrome
 * @param tabId
 * @param callback {function(results, tabId)}
 */
const injectInjectScript = function (chrome, tabId, callback) {

    chrome.scripting.executeScript(
        {
            target: {tabId: tabId},
            files: ["inject-cs.js"],
            matchAboutBlank: true
        },
        results => callback(results, tabId)
    );
};

module.exports = {
    inject: inject,
    getSiteModule: getSiteModule,
    injectInjectScript: injectInjectScript,
}
