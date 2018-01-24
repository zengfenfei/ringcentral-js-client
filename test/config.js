"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise");
var fetch = require("isomorphic-fetch");
exports.default = getConfig();
function getConfig() {
    var authDataUrl = "/data/rc-auth.json";
    if (typeof process !== "undefined" && !process["browser"]) {
        return Promise.resolve(require("../.." + authDataUrl));
    }
    else {
        return fetch(authDataUrl).then(function (res) { return res.json(); });
    }
}
//# sourceMappingURL=config.js.map