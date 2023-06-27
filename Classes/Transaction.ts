class Txn {
    from:Acnt
    to:Acnt
    date:string
    event:string
    amount:number
    constructor(date:string,from:Acnt,to:Acnt,event:string,amount:number) {
        this.date = date
        this.from = from
        this.to = to
        this.event = event
        this.amount
    }
}