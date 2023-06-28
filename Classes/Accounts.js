"use strict";
exports.__esModule = true;
exports.Accounts = void 0;
var Account_1 = require("./Account");
var Accounts = /** @class */ (function () {
    function Accounts() {
        this.accountArr = {};
        this.accountArr = {};
    }
    //returns true if new account created, else false
    Accounts.prototype.addName = function (name) {
        for (var accountName in this.accountArr) {
            if (name == accountName) {
                //name is already in an account
                return false;
            }
        }
        //name is unique: Make a new account
        var newAccount = new Account_1.Account(name);
        this.accountArr[name] = newAccount;
    };
    return Accounts;
}());
exports.Accounts = Accounts;
