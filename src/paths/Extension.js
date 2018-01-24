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
var CallLog_1 = require("./CallLog");
var CallLogSync_1 = require("./CallLogSync");
var ActiveCalls_1 = require("./ActiveCalls");
var PhoneNumber_1 = require("./PhoneNumber");
var Sms_1 = require("./Sms");
var CompanyPager_1 = require("./CompanyPager");
var Fax_1 = require("./Fax");
var MessageStore_1 = require("./MessageStore");
var MessageSync_1 = require("./MessageSync");
var RingOut_1 = require("./RingOut");
var AddressBook_1 = require("./AddressBook");
var AddressBookSync_1 = require("./AddressBookSync");
var Favorite_1 = require("./Favorite");
var Presence_1 = require("./Presence");
var Meeting_1 = require("./Meeting");
var AuthzProfile_1 = require("./AuthzProfile");
var ForwardingNumber_1 = require("./ForwardingNumber");
var BlockedNumber_1 = require("./BlockedNumber");
var BusinessHours_1 = require("./BusinessHours");
var AnsweringRule_1 = require("./AnsweringRule");
var Greeting_1 = require("./Greeting");
var CallerId_1 = require("./CallerId");
var Grant_1 = require("./Grant");
var NotificationSettings_1 = require("./NotificationSettings");
var ProfileImage_1 = require("./ProfileImage");
var Conferencing_1 = require("./Conferencing");
var Device_1 = require("./Device");
var Extension = /** @class */ (function (_super) {
    __extends(Extension, _super);
    function Extension(prv, id, service) {
        return _super.call(this, "extension", id || "~", prv, service) || this;
    }
    /**
     * Internal identifier of a call log record
     */
    Extension.prototype.callLog = function (id) {
        return new CallLog_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.callLogSync = function (id) {
        return new CallLogSync_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.activeCalls = function (id) {
        return new ActiveCalls_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.phoneNumber = function (id) {
        return new PhoneNumber_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.sms = function (id) {
        return new Sms_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.companyPager = function (id) {
        return new CompanyPager_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.fax = function (id) {
        return new Fax_1.default(this, id);
    };
    /**
     * Internal identifier of a message
     */
    Extension.prototype.messageStore = function (id) {
        return new MessageStore_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.messageSync = function (id) {
        return new MessageSync_1.default(this, id);
    };
    /**
     * Internal identifier of a RingOut call
     */
    Extension.prototype.ringOut = function (id) {
        return new RingOut_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.addressBook = function (id) {
        return new AddressBook_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.addressBookSync = function (id) {
        return new AddressBookSync_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.favorite = function (id) {
        return new Favorite_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.presence = function (id) {
        return new Presence_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.meeting = function (id) {
        return new Meeting_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.authzProfile = function (id) {
        return new AuthzProfile_1.default(this, id);
    };
    /**
     * Internal identifier of a forwarding number
     */
    Extension.prototype.forwardingNumber = function (id) {
        return new ForwardingNumber_1.default(this, id);
    };
    /**
     * Internal identifiers of a blocked number list entry
     */
    Extension.prototype.blockedNumber = function (id) {
        return new BlockedNumber_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.businessHours = function (id) {
        return new BusinessHours_1.default(this, id);
    };
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    Extension.prototype.answeringRule = function (id) {
        return new AnsweringRule_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.greeting = function (id) {
        return new Greeting_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.callerId = function (id) {
        return new CallerId_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.grant = function (id) {
        return new Grant_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.notificationSettings = function (id) {
        return new NotificationSettings_1.default(this, id);
    };
    /**
     * Dimensions of a profile image which will be returned in response. If this path parameter is not specified in request URI then
     */
    Extension.prototype.profileImage = function (id) {
        return new ProfileImage_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.conferencing = function (id) {
        return new Conferencing_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    Extension.prototype.list = function (query) {
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
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Extension.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Creates an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    Extension.prototype.post = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Creates an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Extension.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular extension of an account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    Extension.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular extension of an account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Extension.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    Extension.prototype.put = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Extension.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Deletes extension(s) by ID(s).</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    Extension.prototype.delete = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Deletes extension(s) by ID(s).</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Extension.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    return Extension;
}(PathSegment_1.default));
exports.default = Extension;
//# sourceMappingURL=Extension.js.map