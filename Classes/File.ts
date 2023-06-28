import {Accounts} from "./Accounts";
import {Txn} from "./Transaction";
import {Txns} from "./Transactions";
import {UserInput} from "./UserInput";
import log4js from "log4js";
const fs = require("fs");
const { parse } = require("csv-parse");

export class CSV {
    public txns:Txns = new Txns()
    constructor(csvPath:string) {
        const logger = log4js.getLogger('Transaction.ts');

        const self = this;

        let currentRowNum = 0

        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row:string[]) {
                currentRowNum += 1
                //check number is valid
                let amount = 0
                if(isNaN(+row[4])){
                    logger.error("Transaction creation error: line "+currentRowNum+": '"+row[4]+"' is not a number")
                }else{
                    amount = +row[4]
                }

                //create txn
                let newTxn = new Txn(row[0],row[1],row[2],row[3],amount)
                self.txns.addTxn(newTxn)
            })
            .on("end", function () {
                console.log("reading CSV done")
                self.txns.process()

                //===== Get User Input =====
                //UserInput.getCmd(self.txns)
        })

        }


}