"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PathSegment_1 = require("../PathSegment");
var Check = /** @class */ (function (_super) {
    __extends(Check, _super);
    function Check(prv, id, service) {
        return _super.call(this, "check", id, prv, service) || this;
    }
    /**
     *
     */
    Check.prototype.get = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    Check.prototype.getRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    };
    return Check;
}(PathSegment_1.default));
exports.default = Check;
//# sourceMappingURL=Check.js.map