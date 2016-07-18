import fs = require('fs');

fs.readFile('src/index.ts', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Input file: \n" + data.toString());
});
