"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var fs_1 = require("fs");
var RingCentral = require("ringcentral");
var Client_1 = require("../src/Client");
var config_1 = require("./config");
var client;
var inNode = !!fs_1.createReadStream;
before(function () {
    // runs before all tests in this block
    return config_1.default.then(function (conf) {
        var config = conf;
        client = new Client_1.default(new RingCentral(config.app));
        return client.service.platform().login(config.user);
    });
});
describe("PathSegments", function () {
    /*
     * AnsweringRule list:
     { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100',
  records:
   [ { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule/business-hours-rule',
       id: 'business-hours-rule',
       type: 'BusinessHours',
       enabled: true,
       callHandlingAction: 'ForwardCalls' },
     { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule/36288004',
       id: '36288004',
       type: 'Custom',
       name: 'TestRule1',
       enabled: true,
       schedule: [Object],
       callers: [Object],
       callHandlingAction: 'ForwardCalls' } ],
  paging:
   { page: 1,
     totalPages: 1,
     perPage: 100,
     totalElements: 2,
     pageStart: 0,
     pageEnd: 1 },
  navigation:
   { firstPage: { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100' },
     lastPage: { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100' } } }

     */
    it("AnsweringRule", function () {
        var ext = client.account().extension();
        var id;
        return ext.answeringRule().post({
            callers: [{
                    callerId: "+46843216868",
                }],
            enabled: false,
        }).then(function (res) { return id = res.id; })
            .then(function (res) { return ext.answeringRule(id).get(); })
            .then(function (res) { return ext.answeringRule(id).put({ name: "updated." }); })
            .then(function (res) { return ext.answeringRule().list(); })
            .then(function (res) { return ext.answeringRule(id).delete(); });
    });
    it("gets business hours rule", function () {
        return client.account().extension().businessHours().get();
    });
    describe("BlockedNumber", function () {
        it("covers all", function () {
            var ext = client.account().extension();
            var createdId;
            var createdBlockedPhoneNumber = "+18989999";
            var updatedBlockedPhoneNumber = "+12222898";
            return ext.blockedNumber().post({ phoneNumber: createdBlockedPhoneNumber }).then(function (res) {
                createdId = res.id;
                chai_1.expect(res.phoneNumber).to.eqls(createdBlockedPhoneNumber);
                return ext.blockedNumber(createdId).get();
            }).then(function (res) { return ext.blockedNumber().list(); })
                .then(function (res) {
                // FIXME Report: Error: Parameter blockedNumberId value in request body doesn't match specified in path. Maybe server error.
                // /return ext.blockedNumber(createdId).put({ phoneNumber: updatedBlockedPhoneNumber });
            }).then(function (res) {
                // expect(res.phoneNumber).eqls(updatedBlockedPhoneNumber);
            }).then(function (res) {
                return ext.blockedNumber(createdId).delete();
            });
        });
    });
    describe("Contacts", function () {
        it("covers all", function () {
            var addressBook = client.account().extension().addressBook();
            var createdId;
            return addressBook.contact().post({ firstName: "Test" })
                .then(function (res) {
                createdId = res.id;
            })
                .then(function (res) { return addressBook.contact(createdId).get(); })
                .then(function (res) { return addressBook.contact().list(); })
                .then(function (res) {
                return addressBook.contact(createdId).put({ firstName: "ModifiedFirstName" });
            })
                .then(function (res) { return addressBook.contact(createdId).delete(); });
        });
    });
    describe("Subscription", function () {
        it("covers all", function () {
            var createdId;
            return client.subscription().post({
                deliveryMode: { transportType: "PubNub", encryption: true },
                eventFilters: ["/restapi/v1.0/account/~/extension/~/presence?detailedTelephonyState=true"],
            }).then(function (res) { return createdId = res.id; })
                .then(function (res) { return client.subscription(createdId).get(); })
                .then(function (res) { return client.subscription(createdId).put({ eventFilters: ["/restapi/v1.0/account/~/extension/~/message-store"] }); })
                .then(function (res) { return client.subscription(createdId).delete(); });
        });
    });
    describe("Meeting", function () {
        it.skip("covers all", function () {
            var createdId;
            var ext = client.account().extension();
            return ext.meeting().post({ meetingType: "Instant" }) // Error reported, "errorCode" : "CMN-408",\n  "message" : "[Meetings] permission required", maybe sandbox doesn't support meetings API yet.
                .then(function (res) { return createdId = res.id; })
                .then(function (res) { return ext.meeting(createdId).delete(); }).catch(function (e) { return chai_1.expect(false, e); });
        });
        it("service info", function () {
            return client.account().extension().meeting().serviceInfo().get();
        });
    });
    describe("Ringout", function () {
        it("covers all", function () {
            var id;
            return client.account().extension().ringOut().post({
                from: { phoneNumber: "+16507411615" },
                to: { phoneNumber: "+13213042353" },
            }).then(function (res) { return id = res.id; })
                .then(function (res) { return client.account().extension().ringOut(id).get(); })
                .then(function (res) { return client.account().extension().ringOut(id).delete(); });
        });
    });
    describe("ForwardingNumber", function () {
        it("covers all", function () {
            return client.account().extension().forwardingNumber().list();
            /* let id: string;
             return client.account().extension().forwardingNumber().post({ label: "test", phoneNumber: "+16507411615" })
                 .then(res => client.account().extension().forwardingNumber());*/
        });
    });
    /*describe("Group", () => {

        it("covers all", () => {
            const addressBook = client.account().extension().addressBook();
            return addressBook.group().list();
        });

    });*/
    describe("Greeting", function () {
        // TODO add delete and update methods
    });
    describe("Conferencing", function () {
        // TODO
    });
    describe("Country", function () {
        it("covers all", function () {
            return client.dictionary().country().list().then(function (res) {
                if (res.records.length > 0) {
                    return client.dictionary().country(res.records[0].id).get();
                }
            });
        });
    });
    describe("State", function () {
        it("covers all", function () {
            return client.dictionary().state().list().then(function (res) {
                if (res.records.length > 0) {
                    return client.dictionary().state(res.records[0].id).get();
                }
            });
        });
    });
    describe("Device", function () {
        it("covers all", function () {
            return client.account().device().list().then(function (res) {
                if (res.records.length > 0) {
                    return client.account().device(res.records[0].id).get();
                }
            });
        });
    });
    describe("Timezone", function () {
        it("covers all", function () {
            return client.dictionary().timezone().list().then(function (res) {
                if (res.records.length > 0) {
                    return client.dictionary().timezone(res.records[0].id).get();
                }
            });
        });
    });
    describe("PhoneNumber", function () {
        it("covers all", function () {
            return client.account().phoneNumber().list().then(function (res) {
                if (res.records.length > 0) {
                    return client.account().phoneNumber(res.records[0].id).get();
                }
            });
        });
    });
    describe("Language", function () {
        it("covers all", function () {
            return client.dictionary().language().list().then(function (res) {
                if (res.records.length > 0) {
                    return client.dictionary().language(res.records[0].id).get();
                }
            });
        });
    });
    describe("Message", function () {
        it("covers all", function () {
            var id;
            return client.account().extension().companyPager().post({
                text: "js-client unit test.",
                to: [{ extensionNumber: "101" }],
            }).then(function (res) { return id = res.id; })
                .then(function (res) { return client.account().extension().messageStore().list(); })
                .then(function (res) { return client.account().extension().messageStore(id).put({ readStatus: "Read" }); })
                .then(function (res) { return client.account().extension().messageStore(id).get(); })
                .then(function (res) { return client.account().extension().messageStore(id).delete(); });
        });
        it("gets sync message", function () {
            return client.account().extension().messageSync().list();
        });
    });
    describe("AuthzProfile", function () {
        it("covers all", function () {
            return client.account().extension().authzProfile().get()
                .then(function (res) { return client.account().extension().authzProfile().check().get(); });
        });
    });
    /*describe("Clientinfo", () => {

        it("covers all", () => {
            return client.clientInfo().customData().put({});
        });

    });*/
    describe("ActiveCalls", function () {
        it("covers all", function () {
            return client.account().extension().activeCalls().list();
        });
    });
    describe("Grant", function () {
        it("covers all", function () {
            return client.account().extension().grant().list();
        });
    });
    describe("Location", function () {
        it("covers all", function () {
            return client.dictionary().state().list()
                .then(function (res) {
                if (res.records.length > 0) {
                    return client.dictionary().location().list({ stateId: res.records[0].id });
                }
            });
        });
    });
    /*describe("NumberPool", () => {

        it("covers all", () => {
            return client.numberPool().lookup().post({ countryCode: "cn" });
        });

    });*/
    describe("Department", function () {
        it("covers all", function () {
            return client.account().department().members().list();
        });
    });
    describe("BusinessAddress", function () {
        it("covers all", function () {
            return client.account().businessAddress().get().then(function (res) {
                return client.account().businessAddress().put({ email: "js-client-test@ringcentral.com" });
            });
        });
    });
    /*describe("DialingPlan", () => {

        it("covers all", () => {
            return client.account().dialingPlan().list();
        });

    });*/
    describe("Presence", function () {
        it("covers all", function () {
            return client.account().extension().presence().get();
        });
    });
    describe("CallLog", function () {
        it("gets call log sync", function () {
            return client.account().extension().callLogSync().list({ recordCount: 5 });
        });
    });
    describe("AddressBook", function () {
        it("gets address book sync", function () {
            return client.account().extension().addressBookSync().list();
        });
    });
    describe("NumberParser", function () {
        it("parses number", function () {
            return client.numberParser().parse().post({ originalStrings: "+8618657118272" });
        });
    });
});
describe("Glip", function () {
    it("Get current company", function () {
        return client.glip().companies("~").get().then(function (c) {
            chai_1.expect(c).to.has.keys("id", "name", "domain", "creationTime", "lastModifiedTime");
        });
    });
    it("List groups", function () {
        return client.glip().groups().list().then(function (groups) {
            chai_1.expect(groups.records[0]).has.keys("id", "name", "description", "type", "members", "isPublic", "creationTime", "lastModifiedTime");
        });
    });
    it("Get current user", function () {
        return client.glip().persons("~").get().then(function (person) {
            chai_1.expect(person).to.has.keys("id", "firstName", "lastName", "email", "companyId", "creationTime", "lastModifiedTime");
        });
    });
    it("Posts", function () {
        return client.glip().groups().list().then(function (g) {
            return client.glip().groups(g.records[0].id).posts().list();
        }).then(function (posts) {
            chai_1.expect(posts.records[0]).to.has.keys("id", "groupId", "type", "text", "creatorId", "addedPersonIds", "creationTime", "lastModifiedTime", "attachments", "activity", "title", "iconUri", "iconEmoji", "mentions");
        });
    });
});
//# sourceMappingURL=url-segments-test.js.map