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
var SipProvision_1 = require("./SipProvision");
var CustomData_1 = require("./CustomData");
var ClientInfo = /** @class */ (function (_super) {
    __extends(ClientInfo, _super);
    function ClientInfo(prv, id, service) {
        return _super.call(this, "client-info", id, prv, service) || this;
    }
    /**
     *
     */
    ClientInfo.prototype.sipProvision = function (id) {
        return new SipProvision_1.default(this, id);
    };
    /**
     *
     */
    ClientInfo.prototype.customData = function (id) {
        return new CustomData_1.default(this, id);
    };
    return ClientInfo;
}(PathSegment_1.default));
exports.default = ClientInfo;
//# sourceMappingURL=ClientInfo.js.map