import {Txn} from "./Transaction";

export class Account {
    private bal:number = 0
    public name:string
    public txns:Txn[] = []
    constructor(name:string,initBal:number=0) {
        this.bal = initBal
        this.name = name
    }
    public add(toAdd:number){
        this.bal = Math.round((this.bal + toAdd) * 100) / 100
    }

    public sub(toSub:number){
        this.bal = Math.round((this.bal - toSub) * 100) / 100
    }

    public getBal():number {
        return this.bal
    }


}