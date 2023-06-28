"use strict";
exports.__esModule = true;
exports.Txn = void 0;
var Txn = /** @class */ (function () {
    function Txn(date, from, to, event, amount) {
        this.date = date;
        this.from = from;
        this.to = to;
        this.event = event;
        this.amount = amount;
    }
    return Txn;
}());
exports.Txn = Txn;
