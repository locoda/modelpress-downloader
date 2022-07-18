const ga = require("./google-analytics");
const downloader = require("./downloader");
const messaging = require("./messaging");
const logger = require("./logger2")(module.id);
const globals = require("./globals");

logger.debug("module", module);
// inits
ga.bootstrap(module.id);
downloader.listenForDownloadFailureAndRetry();

logger.debug("listening for download message.")
// listen for download message from popup.js
messaging.listen("download", function (job, sendResponse) {
    downloader.downloadJob(job, sendResponse);
    // async response
    return true;
});

logger.debug("listening for onInstalled event.")
// track installation
chrome.runtime.onInstalled.addListener(function(details) {
    logger.debug("onInstalled details=", details);
    if (details.reason === "install") {
        logger.debug("extension", "install", globals.getExtensionVersion(), typeof (globals.getExtensionVersion()));
        ga.trackEvent("extension", "install", globals.getExtensionVersion());
    }

    if (details.reason === "update") {
        logger.debug("extension", "update", globals.getExtensionVersion());
        ga.trackEvent("extension", "update", globals.getExtensionVersion());
    }
});
