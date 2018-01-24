"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var fs_1 = require("fs");
var RingCentral = require("ringcentral");
var Client_1 = require("../src/Client");
require("../src/Client-test");
var config_1 = require("./config");
require("./url-segments-test");
var client;
var inNode = !!fs_1.createReadStream;
var aYearAgo = new Date();
aYearAgo.setFullYear(aYearAgo.getFullYear() - 1);
before(function () {
    // runs before all tests in this block
    return config_1.default.then(function (conf) {
        var config = conf;
        client = new Client_1.default(new RingCentral(config.app));
        return client.service.platform().login(config.user);
    });
});
describe("Account", function () {
    it("Get Account info", function () {
        return client.account().get().then(function (account) {
            chai_1.expect(account).to.contain.keys(["id", "uri", "mainNumber", "operator", "serviceInfo", "setupWizardState", "status"]);
        });
    });
    it("Get Account info with id not exists should return 404", function () {
        return client.account("accountIdNotExist").get().catch(function (e) {
            chai_1.expect(e.apiResponse.response().status).to.eq(404);
            // expect(e.apiResponse.json().errorCode).to.equal("CMN-102");
        });
    });
});
describe("Extension", function () {
    var extensionProps = ["uri", "id", "extensionNumber", "contact", "name", "type", "status", "permissions", "profileImage"];
    it("get current extension", function () {
        return client.account().extension().get().then(function (ext) {
            chai_1.expect(ext).to.contain.keys(extensionProps);
        });
    });
    it("Get extension list", function () {
        return client.account().extension().list().then(function (exts) {
            shouldBePagingResult(exts);
            chai_1.expect(exts.records[0]).to.has.keys(extensionProps);
        });
    });
    it("Union type parameters, update extension info", function () {
        return client.account().extension().put({ status: "Enabled" }).then(function (ext) {
            chai_1.expect(ext).to.contain.keys(extensionProps);
        });
    });
});
describe("Binary response", function () {
    it("Get message content as binary", function () {
        var ext = client.account().extension();
        return ext.messageStore().list({ dateFrom: aYearAgo.toISOString() }).then(function (msgs) {
            if (msgs.records.length <= 0) {
                throw new Error("No messages found for this extension.");
            }
            return msgs.records[0];
        }).then(function (msg) {
            return ext.messageStore(msg.id).content(msg.attachments[0].id).get().then(function (atch) {
                // expect(atch.headers.get("content-type")).to.has.string("text/plain");
            });
        });
    });
    it("Get recording content", function () {
        var ext = client.account().extension();
        return ext.callLog().list({ dateFrom: aYearAgo.toISOString(), withRecording: true }).then(function (callLogs) {
            if (callLogs.records.length <= 0) {
                return;
            }
            return callLogs.records[0].recording;
        }).then(function (recording) {
            if (!recording) {
                return;
            }
            return client.account().recording(recording.id + "").content().get().then(function (content) {
                chai_1.expect(content.headers.get("content-type")).to.has.string("audio/mpeg");
            });
        });
    });
});
var imgPath = __dirname + "/res/banner_index_logged.png";
describe("Binary request", function () {
    before("Only run in node", function () {
        if (!inNode) {
            _this.skip();
        }
    });
    it("Put profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().put(fs_1.createReadStream(imgPath));
    });
    it("Post profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().post(fs_1.createReadStream(imgPath));
    });
    it("gets current profile image", function () {
        return client.account().extension().profileImage().get();
    });
});
describe("Fax", function () {
    it("send fax, post form data", function () {
        var attachments;
        if (fs_1.createReadStream) {
            attachments = ["Text attentment for test. Followed by a png picture.", fs_1.createReadStream(imgPath)];
        }
        else {
            attachments = ["Test fax test sent from browser, " + navigator.userAgent];
        }
        return client.account().extension().fax().post({ to: [{ phoneNumber: "+16507411615" }] }, attachments);
    });
    it("send fax fail, empty parameter", function () {
        return client.account().extension().fax().post({}, []).then(function (msg) {
            throw new Error("should not send.");
        }, function (e) {
            chai_1.expect(e.apiResponse.json().errorCode).to.eq("InvalidParameter");
        });
    });
});
describe("Call Log", function () {
    it("Get call log", function () {
        return client.account().extension().callLog().list({ dateFrom: aYearAgo.toISOString(), perPage: 2 }).then(function (callLogs) {
            shouldBePagingResult(callLogs);
            if (callLogs.records.length < 1) {
                // return console.warn("No call log items");
            }
            chai_1.expect(callLogs.records[0]).to.has.keys(["uri", "id", "sessionId", "startTime", "duration", "type", "direction", "action", "result", "to", "from"]);
        });
    });
    it("delete today's call log", function () {
        return client.account().extension().callLog().delete();
    });
});
describe("post", function () {
    it("send sms, post plain object", function () {
        return client.account().extension().sms().post({
            from: { phoneNumber: "+17322764403" },
            text: "test sms text content.",
            to: [{ phoneNumber: "+16507411615" }],
        }).then(function (sms) {
            chai_1.expect(sms).to.has.keys(["uri", "id", "to", "from", "type", "creationTime", "readStatus", "priority", "attachments", "direction", "availability", "subject", "messageStatus", "smsSendingAttemptsCount", "conversationId", "conversation", "lastModifiedTime"]);
        });
    });
    it("send sms, without from", function () {
        return client.account().extension().sms().post({ text: "test sms text content.", to: [{ phoneNumber: "+16507411615" }] }).then(function (sms) {
            throw new Error("should fail");
        }).catch(function (e) {
            chai_1.expect(e.apiResponse.json().errorCode).to.eq("InvalidParameter");
        });
    });
});
function shouldBePagingResult(list) {
    chai_1.expect(list).to.has.keys(["navigation", "paging", "records", "uri"]);
}
//# sourceMappingURL=tests.js.map