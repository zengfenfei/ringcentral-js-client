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
// This is Generated Source.
var PathSegment_1 = require("../PathSegment");
var End = /** @class */ (function (_super) {
    __extends(End, _super);
    function End(prv, id, service) {
        return _super.call(this, "end", id, prv, service) || this;
    }
    /**
     *
     */
    End.prototype.post = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    End.prototype.postRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    return End;
}(PathSegment_1.default));
exports.default = End;
//# sourceMappingURL=End.js.map