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
var Members_1 = require("./Members");
var BulkAssign_1 = require("./BulkAssign");
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department(prv, id, service) {
        return _super.call(this, "department", id, prv, service) || this;
    }
    /**
     *
     */
    Department.prototype.members = function (id) {
        return new Members_1.default(this, id);
    };
    /**
     *
     */
    Department.prototype.bulkAssign = function (id) {
        return new BulkAssign_1.default(this, id);
    };
    return Department;
}(PathSegment_1.default));
exports.default = Department;
//# sourceMappingURL=Department.js.map