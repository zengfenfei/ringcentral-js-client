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
var Contacts_1 = require("./Contacts");
var Federation_1 = require("./Federation");
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory(prv, id, service) {
        return _super.call(this, "directory", id, prv, service) || this;
    }
    /**
     * Internal identifier of an extension
     */
    Directory.prototype.contacts = function (id) {
        return new Contacts_1.default(this, id);
    };
    /**
     *
     */
    Directory.prototype.federation = function (id) {
        return new Federation_1.default(this, id);
    };
    return Directory;
}(PathSegment_1.default));
exports.default = Directory;
//# sourceMappingURL=Directory.js.map