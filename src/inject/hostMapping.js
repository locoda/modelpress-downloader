/**
 * Checks location.host and returns the host as is or transforms the host value for some special cases.
 * The returned host value is used for looking up the inject module.
 * @param location
 * @returns {string|*}
 */
exports.check = function (location) {
    let host = location.host;
    // mdpr.jp.js supports all sites under *.mdpr.jp
    if (host.endsWith(".mdpr.jp")) {
        return "mdpr.jp";
    }

    // only support /read/ path on www.bilibili.com
    if (host === "www.bilibili.com" && !location.pathname.startsWith("/read/")) {
        return "not_supported";
    }

    if (host === "talent.thetv.jp") {
        return "thetv.jp"
    }

    if (host.endsWith(".wowkorea.jp")) {
        return "www.wowkorea.jp";
    }

    return host;
};
