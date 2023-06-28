"use strict";
exports.__esModule = true;
exports.TxnCsv = void 0;
var fs = require("fs");
var parse = require("csv-parse").parse;
var TxnCsv = /** @class */ (function () {
    function TxnCsv(csvPath) {
        this.txn = [];
        var accountArr = new Acnts();
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
            console.log(row);
            //create account
            accountArr.addName(row[2]);
            //create txn
        });
    }
    return TxnCsv;
}());
exports.TxnCsv = TxnCsv;
