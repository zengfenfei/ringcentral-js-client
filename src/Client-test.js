"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RingCentral = require("ringcentral");
var config_1 = require("../test/config");
var Client_1 = require("./Client");
var client;
config_1.default.then(function (config) {
    client = new Client_1.default(new RingCentral({ cachePrefix: "rc-client-test" }));
});
describe("client", function () {
    it("covers all", runCoverage);
});
function runCoverage() {
    client.clientInfo();
}
//# sourceMappingURL=Client-test.js.map