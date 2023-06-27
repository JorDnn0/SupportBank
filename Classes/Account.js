var Account = /** @class */ (function () {
    function Account(initBal) {
        if (initBal === void 0) { initBal = 0; }
        this.bal = 0;
        this.bal = initBal;
    }
    Account.prototype.add = function (toAdd) {
        this.bal += toAdd;
    };
    Account.prototype.sub = function (toSub) {
        this.bal -= toSub;
    };
    Account.prototype.transfer = function (from, to, toTransfer) {
        from.sub(toTransfer);
        to.add(toTransfer);
    };
    return Account;
}());
