import {CSV} from "./File";
import * as readline from "readline";
import {Txns} from "./Transactions";

export class UserInput{
    public static getCmd(txns:Txns){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter Command', (answer) => {
            if(answer == "List All"){
                txns.accounts.log()
            }else if(/List\s\w+\s*\w*/.test(answer)){
                let name = answer.substring(5,answer.length)
                let allTxns = txns.accounts.accountMap.get(name)?.txns
                if(allTxns!=undefined){
                    allTxns.map(t => console.log(t.date,t.event))
                }else{
                    console.log("transaction list undefined for "+name)
                }
            }
            rl.close();
        });
    }
}