const dev = require("./is-dev");
const globals = require("./globals");
const window = globals.getWindow();

function noop() {}

module.exports = function (module) {
    return {
        debug: dev ? window.console.debug.bind(window.console, "[" + module + "]") : noop,
        error: dev ? window.console.error.bind(window.console, "[" + module + "]") : noop,
        log: dev ? window.console.log.bind(window.console, "[" + module + "]") : noop,
    }
}
