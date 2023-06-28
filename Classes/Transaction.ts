import {Account} from "./Account";


export class Txn {
    from:Account
    to:Account
    date:string
    event:string
    amount:number
    constructor(date:string,from:Account,to:Account,event:string,amount:number) {
        this.date = date
        this.from = from
        this.to = to
        this.event = event
        this.amount = amount
    }
}

