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
var CallLog = /** @class */ (function (_super) {
    __extends(CallLog, _super);
    function CallLog(prv, id, service) {
        return _super.call(this, "call-log", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p><p>Returns call log records filtered by the specified parameters.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    CallLog.prototype.list = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p><p>Returns call log records filtered by the specified parameters.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    CallLog.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditCallLog</td><td>Viewing and updating user call logs</td></tr><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    CallLog.prototype.delete = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditCallLog</td><td>Viewing and updating user call logs</td></tr><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    CallLog.prototype.deleteRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    };
    /**
     *
     */
    CallLog.prototype.get = function (query) {
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
    CallLog.prototype.getRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    };
    return CallLog;
}(PathSegment_1.default));
exports.default = CallLog;
//# sourceMappingURL=CallLog.js.map