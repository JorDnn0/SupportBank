var Txn = /** @class */ (function () {
    function Txn(date, from, to, event, amount) {
        this.date = date;
        this.from = from;
        this.to = to;
        this.event = event;
        this.amount;
    }
    return Txn;
}());
