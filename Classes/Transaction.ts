import {Account} from "./Account";
import log4js from "log4js"

export class Txn {
    from:string
    to:string
    date:string
    event:string
    amount:number = 0
    constructor(date:string,from:string,to:string,event:string,amount:string) {
        const logger = log4js.getLogger('Transaction.ts');
        this.date = date
        this.from = from
        this.to = to
        this.event = event
        if(isNaN(+amount)){
            logger.error("Transaction creation error: '"+amount+"' is not a number")
        }else{
            this.amount = +amount
        }
    }
}

