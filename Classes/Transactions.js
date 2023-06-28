"use strict";
exports.__esModule = true;
exports.Txns = void 0;
var Accounts_1 = require("./Accounts");
var Txns = /** @class */ (function () {
    function Txns(unprocessedTxns) {
        if (unprocessedTxns === void 0) { unprocessedTxns = []; }
        this.accounts = new Accounts_1.Accounts();
        this.unprocessedTxns = unprocessedTxns;
    }
    Txns.prototype.addTxn = function (txn) {
        //console.log(txn)
        this.unprocessedTxns.push(txn);
        //console.log("transactions added so far:"/*+ this.unprocessedTxns*/)
    };
    Txns.prototype.process = function () {
        //console.log(this.unprocessedTxns)
        for (var _i = 0, _a = this.unprocessedTxns; _i < _a.length; _i++) {
            var txn = _a[_i];
            //create accounts
            this.accounts.addName(txn.from);
            this.accounts.addName(txn.to);
            this.transfer(this.accounts.accountMap.get(txn.from), this.accounts.accountMap.get(txn.to), txn.amount);
        }
        this.unprocessedTxns = [];
        this.accounts.log();
    };
    Txns.prototype.transfer = function (from, to, toTransfer) {
        from.sub(toTransfer);
        to.add(toTransfer);
        console.log("paid: " + toTransfer + " from " + from.name + " to " + to.name + ":::: final balances:" + from.getBal(), to.getBal());
    };
    return Txns;
}());
exports.Txns = Txns;
