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
var Favorite = /** @class */ (function (_super) {
    __extends(Favorite, _super);
    function Favorite(prv, id, service) {
        return _super.call(this, "favorite", id, prv, service) || this;
    }
    /**
     *
     */
    Favorite.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    Favorite.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *
     */
    Favorite.prototype.put = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    Favorite.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Favorite;
}(PathSegment_1.default));
exports.default = Favorite;
//# sourceMappingURL=Favorite.js.map