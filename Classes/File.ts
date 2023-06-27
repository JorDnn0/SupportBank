const fs = require("fs");
const { parse } = require("csv-parse");

export class CSV{
    constructor(csvPath:string) {
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
                console.log(row);
            })
    }
}