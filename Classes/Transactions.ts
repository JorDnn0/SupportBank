import {Txn} from "./Transaction";
import {Accounts} from "./Accounts";
import {Account} from "./Account";
export class Txns{
    private unprocessedTxns:Txn[]
    private accounts = new Accounts()

    constructor(unprocessedTxns:Txn[] = []) {
        this.unprocessedTxns = unprocessedTxns
    }

    addTxn(txn:Txn){
        //console.log(txn)
        this.unprocessedTxns.push(txn)
        //console.log("transactions added so far:"/*+ this.unprocessedTxns*/)
    }

    process(){

        //console.log(this.unprocessedTxns)

        for (let txn of this.unprocessedTxns){

            //create accounts
            let from = this.accounts.addName(txn.from)
            let to = this.accounts.addName(txn.to)

            if(this.accounts.accountMap.get(txn.from)==undefined){
                console.log("help")
            } else{
                this.transfer(from,to,txn.amount)
            }
        }
        this.unprocessedTxns = []

        this.accounts.log()
    }

    transfer(from:Account, to:Account, toTransfer:number){
        from.sub(toTransfer)
        to.add(toTransfer)
        console.log("paid: "+toTransfer+" from "+from.name+" to "+ to.name+":::: final balances:"+from.getBal(),to.getBal())
    }
}