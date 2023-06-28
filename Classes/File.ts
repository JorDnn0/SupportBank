import {Accounts} from "./Accounts";
import {Txn} from "./Transaction";

const fs = require("fs");
const { parse } = require("csv-parse");

export class TxnCsv {
    private txn:Txn[] = []
    constructor(csvPath:string) {
        let accountArr = new Accounts()
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
                console.log(row)
                //create accounts
                accountArr.addName(row[1])
                accountArr.addName(row[2])

                //create txn

            })
    }
}