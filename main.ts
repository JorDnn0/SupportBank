
import { CSV } from "./Classes/File";
import * as log4js from 'log4js';
function main(){
    log4js.configure({
        appenders: {
            file: { type: 'fileSync', filename: 'logs/debug.log' }
        },
        categories: {
            default: { appenders: ['file'], level: 'debug'}
        }
    });

    const logger = log4js.getLogger('main.ts');
    logger.info("program started")
    //let csvData = new CSV("./Transactions2014.csv")
    let csvData = new CSV("./DodgyTransactions2015.csv")
}




main()