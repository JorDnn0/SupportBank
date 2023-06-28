import {Account} from "./Account";


export class Txn {
    from:string
    to:string
    date:string
    event:string
    amount:number
    constructor(date:string,from:string,to:string,event:string,amount:string) {
        this.date = date
        this.from = from
        this.to = to
        this.event = event
        this.amount = +amount
    }
}

