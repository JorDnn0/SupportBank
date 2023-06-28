import {Accounts} from "./Accounts";
import {Txn} from "./Transaction";
import {Txns} from "./Transactions";

const fs = require("fs");
const { parse } = require("csv-parse");

export class TxnCsv {
    public txns = new Txns()
    constructor(csvPath:string) {
        const self = this;
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row:string[]) {
                //create txn
                let newTxn = new Txn(row[0],row[1],row[2],row[3],row[4])
                self.txns.addTxn(newTxn)
            })
            .on("end", function () {
             console.log("reading CSV done")
            self.txns.process()
        })


        }


}