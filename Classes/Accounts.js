"use strict";
exports.__esModule = true;
exports.Accounts = void 0;
var Account_1 = require("./Account");
var Accounts = /** @class */ (function () {
    function Accounts() {
        this.accountMap = new Map();
    }
    //returns true if new account created, else false
    Accounts.prototype.addName = function (name) {
        var exists = false;
        this.accountMap.forEach(function (value, accountName) {
            if (name == accountName) {
                //name is already in an account
                exists = true;
            }
        });
        //name is unique: Make a new account
        if (!exists) {
            var newAccount = new Account_1.Account(name, 0);
            this.accountMap.set(name, newAccount);
            console.log("Creating new account");
            //console.log(this.accountMap)
            return true;
        }
        else {
            return false;
        }
    };
    Accounts.prototype.log = function () {
        console.log("map size:" + this.accountMap.size);
        console.log(this.accountMap.keys());
        this.accountMap.forEach(function (value, key) {
            console.log(key, value);
        });
    };
    return Accounts;
}());
exports.Accounts = Accounts;
