import {Account} from "./Account";

export class Accounts{
    public accountArr: Record<string, Account> = {};
    constructor(){
        this.accountArr = {}
    }

    //returns true if new account created, else false
    public addName(name:string):boolean{
        for(let accountName in this.accountArr){
            if(name==accountName) {
                //name is already in an account
                return false
            }
        }
        //name is unique: Make a new account
        let newAccount = new Account(name)
        this.accountArr[name] = newAccount
    }
}