import {Txn} from "./Transaction";
import {Accounts} from "./Accounts";
import {Account} from "./Account";
export class Txns{
    private unprocessedTxns:Txn[]
    public accounts = new Accounts()

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
             this.accounts.addName(txn.from)
             this.accounts.addName(txn.to)

            if(this.accounts.accountMap.get(txn.from)==undefined){
                console.log("help")
            } else{
                this.transfer(txn)
            }
        }
        this.unprocessedTxns = []

        this.accounts.log()
    }

    transfer(txn:Txn){
        let from = this.accounts.accountMap.get(txn.from)
        let to = this.accounts.accountMap.get(txn.to)
        if(from==undefined||to==undefined){
            console.log("error: undefined")
        }else{
            from.sub(txn.amount)
            to.add(txn.amount)

            //add transactions to list
            from.txns.push(txn)
            to.txns.push(txn)
            console.log("paid: "+txn.amount+" from "+from.name+" to "+ to.name+":::: final balances:"+from.getBal(),to.getBal())
        }
    }
}