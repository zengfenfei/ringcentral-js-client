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
var Contact_1 = require("./Contact");
var AddressBook = /** @class */ (function (_super) {
    __extends(AddressBook, _super);
    function AddressBook(prv, id, service) {
        return _super.call(this, "address-book", id, prv, service) || this;
    }
    /**
     * Internal identifier of an extension
     */
    AddressBook.prototype.contact = function (id) {
        return new Contact_1.default(this, id);
    };
    return AddressBook;
}(PathSegment_1.default));
exports.default = AddressBook;
//# sourceMappingURL=AddressBook.js.map