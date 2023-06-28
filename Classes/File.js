"use strict";
exports.__esModule = true;
exports.TxnCsv = void 0;
var Accounts_1 = require("./Accounts");
var fs = require("fs");
var parse = require("csv-parse").parse;
var TxnCsv = /** @class */ (function () {
    function TxnCsv(csvPath) {
        this.txn = [];
        var accountArr = new Accounts_1.Accounts();
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
            console.log(row);
            //create accounts
            accountArr.addName(row[1]);
            accountArr.addName(row[2]);
            //create txn
        });
    }
    return TxnCsv;
}());
exports.TxnCsv = TxnCsv;
