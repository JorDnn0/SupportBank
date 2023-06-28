import {Account} from "./Account";
import log4js from "log4js"

export class Txn {
    from:string
    to:string
    date:string
    event:string
    amount:number
    constructor(date:string,from:string,to:string,event:string,amount:number) {
        this.date = date
        this.from = from
        this.to = to
        this.event = event
        this.amount = amount
    }
}

