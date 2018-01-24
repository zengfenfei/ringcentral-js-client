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
var Users_1 = require("./Users");
var Devices_1 = require("./Devices");
var BulkAssign_1 = require("./BulkAssign");
var PagingOnlyGroups = /** @class */ (function (_super) {
    __extends(PagingOnlyGroups, _super);
    function PagingOnlyGroups(prv, id, service) {
        return _super.call(this, "paging-only-groups", id, prv, service) || this;
    }
    /**
     *
     */
    PagingOnlyGroups.prototype.users = function (id) {
        return new Users_1.default(this, id);
    };
    /**
     *
     */
    PagingOnlyGroups.prototype.devices = function (id) {
        return new Devices_1.default(this, id);
    };
    /**
     *
     */
    PagingOnlyGroups.prototype.bulkAssign = function (id) {
        return new BulkAssign_1.default(this, id);
    };
    return PagingOnlyGroups;
}(PathSegment_1.default));
exports.default = PagingOnlyGroups;
//# sourceMappingURL=PagingOnlyGroups.js.map