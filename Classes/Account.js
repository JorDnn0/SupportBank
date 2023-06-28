var Acnts = /** @class */ (function () {
    function Acnts() {
    }
    //returns true if new account created, else false
    Acnts.prototype.addName = function (name) {
        for (var acntName in this.acntArr) {
            if (name == acntName) {
                //name is already in an account
                return false;
            }
        }
        //name is unique: Make a new account
        var newAcnt = new Acnt(name);
        this.acntArr[name] = newAcnt;
    };
    return Acnts;
}());
var Account = /** @class */ (function () {
    function Acnt(name, initBal) {
        if (initBal === void 0) { initBal = 0; }
        this.bal = 0;
        this.bal = initBal;
        this.name = name;
    }
    Acnt.prototype.add = function (toAdd) {
        this.bal += toAdd;
    };
    Acnt.prototype.sub = function (toSub) {
        this.bal -= toSub;
    };
    Acnt.prototype.transfer = function (from, to, toTransfer) {
        from.sub(toTransfer);
        to.add(toTransfer);
    };
    return Acnt;
}());
