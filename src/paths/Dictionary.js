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
var FaxCoverPage_1 = require("./FaxCoverPage");
var Greeting_1 = require("./Greeting");
var Language_1 = require("./Language");
var Country_1 = require("./Country");
var Location_1 = require("./Location");
var State_1 = require("./State");
var Timezone_1 = require("./Timezone");
var Device_1 = require("./Device");
var LicenseTypes_1 = require("./LicenseTypes");
var Dictionary = /** @class */ (function (_super) {
    __extends(Dictionary, _super);
    function Dictionary(prv, id, service) {
        return _super.call(this, "dictionary", id, prv, service) || this;
    }
    /**
     *
     */
    Dictionary.prototype.faxCoverPage = function (id) {
        return new FaxCoverPage_1.default(this, id);
    };
    /**
     *
     */
    Dictionary.prototype.greeting = function (id) {
        return new Greeting_1.default(this, id);
    };
    /**
     * Internal identifier of a language
     */
    Dictionary.prototype.language = function (id) {
        return new Language_1.default(this, id);
    };
    /**
     * Internal identifier of a country
     */
    Dictionary.prototype.country = function (id) {
        return new Country_1.default(this, id);
    };
    /**
     *
     */
    Dictionary.prototype.location = function (id) {
        return new Location_1.default(this, id);
    };
    /**
     * Internal identifier of a state
     */
    Dictionary.prototype.state = function (id) {
        return new State_1.default(this, id);
    };
    /**
     * Internal identifier of a timezone
     */
    Dictionary.prototype.timezone = function (id) {
        return new Timezone_1.default(this, id);
    };
    /**
     *
     */
    Dictionary.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    /**
     *
     */
    Dictionary.prototype.licenseTypes = function (id) {
        return new LicenseTypes_1.default(this, id);
    };
    return Dictionary;
}(PathSegment_1.default));
exports.default = Dictionary;
//# sourceMappingURL=Dictionary.js.map