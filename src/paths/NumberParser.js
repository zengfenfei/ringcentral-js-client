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
var Parse_1 = require("./Parse");
var NumberParser = /** @class */ (function (_super) {
    __extends(NumberParser, _super);
    function NumberParser(prv, id, service) {
        return _super.call(this, "number-parser", id, prv, service) || this;
    }
    /**
     *
     */
    NumberParser.prototype.parse = function (id) {
        return new Parse_1.default(this, id);
    };
    return NumberParser;
}(PathSegment_1.default));
exports.default = NumberParser;
//# sourceMappingURL=NumberParser.js.map