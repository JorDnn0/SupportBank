"use strict";
exports.__esModule = true;
exports.CSV = void 0;
var fs = require("fs");
var parse = require("csv-parse").parse;
var CSV = /** @class */ (function () {
    function CSV(csvPath) {
        fs.createReadStream(csvPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
            console.log(row);
        });
    }
    return CSV;
}());
exports.CSV = CSV;
