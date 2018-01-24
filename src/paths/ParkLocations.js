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
var BulkAssign_1 = require("./BulkAssign");
var ParkLocations = /** @class */ (function (_super) {
    __extends(ParkLocations, _super);
    function ParkLocations(prv, id, service) {
        return _super.call(this, "park-locations", id, prv, service) || this;
    }
    /**
     *
     */
    ParkLocations.prototype.users = function (id) {
        return new Users_1.default(this, id);
    };
    /**
     *
     */
    ParkLocations.prototype.bulkAssign = function (id) {
        return new BulkAssign_1.default(this, id);
    };
    return ParkLocations;
}(PathSegment_1.default));
exports.default = ParkLocations;
//# sourceMappingURL=ParkLocations.js.map