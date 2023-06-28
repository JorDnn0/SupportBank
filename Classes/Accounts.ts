import {Account} from "./Account";

export class Accounts{
    public accountMap = new Map<string, Account>();
    constructor(){

    }
    //returns true if new account created, else false
    public addName(name:string):Account{
        let account:Account|undefined
        this.accountMap.forEach((value:Account, accountName:string) => {
            if(name==accountName) {
                //name is already in an account

                account = value
            }
        });

        //name is unique: Make a new account
        if(account==undefined){
            let newAccount = new Account(name,0)
            this.accountMap.set(name,newAccount)
            console.log("Creating new account")
            account = this.accountMap.get(name)
            //console.log(this.accountMap)
            if(account==undefined){
                console.log("undefined Account")
                return newAccount
            } else{
                return account
            }
        } else{
            return account
        }

    }

    public log(){
        console.log("map size:" + this.accountMap.size)
        console.log(this.accountMap.keys())
        this.accountMap.forEach((value:Account, key:string) => {
            console.log(key, value);
        });
    }
}