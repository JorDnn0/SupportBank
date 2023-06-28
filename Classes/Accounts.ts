import {Account} from "./Account";

export class Accounts{
    public accountMap = new Map<string, Account>();
    constructor(){

    }
    //returns true if new account created, else false
    public addName(name:string):void{
        let exists:boolean = false
        this.accountMap.forEach((value:Account, accountName:string) => {
            if(name==accountName) {
                //name is already in an account

                exists = true
            }
        });

        //name is unique: Make a new account
        if(!exists) {
            let newAccount = new Account(name, 0)
            this.accountMap.set(name, newAccount)
            console.log("Creating new account")
            //console.log(this.accountMap)
        }
    }

    public log(){
        console.log("map size:" + this.accountMap.size)
        this.accountMap.forEach((value:Account, key:string) => {
            console.log(key, value.getBal());
        });
    }
}