"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, initBal) {
        if (initBal === void 0) { initBal = 0; }
        this.bal = 0;
        this.bal = initBal;
        this.name = name;
    }
    Account.prototype.add = function (toAdd) {
        this.bal = this.bal + toAdd;
    };
    Account.prototype.sub = function (toSub) {
        this.bal = Math.round(this.bal - toSub * 100) / 100;
    };
    Account.prototype.getBal = function () {
        return this.bal;
    };
    return Account;
}());
exports.Account = Account;
