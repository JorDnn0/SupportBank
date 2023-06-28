"use strict";
exports.__esModule = true;
exports.TxnCsv = void 0;
var Transaction_1 = require("./Transaction");
var Transactions_1 = require("./Transactions");
var fs = require("fs");
var parse = require("csv-parse").parse;
var TxnCsv = /** @class */ (function () {
    function TxnCsv(csvPath) {
        this.txns = new Transactions_1.Txns();
        var self = this;
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
            //create txn
            var newTxn = new Transaction_1.Txn(row[0], row[1], row[2], row[3], row[4]);
            self.txns.addTxn(newTxn);
        })
            .on("end", function () {
            console.log("reading CSV done");
            self.txns.process();
        });
    }
    return TxnCsv;
}());
exports.TxnCsv = TxnCsv;
