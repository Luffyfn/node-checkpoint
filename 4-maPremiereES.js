const fs = require("fs");

const file = process.argv[2];

const readFile = fs.readFileSync(file);

const buffer = readFile.toString().split("\n");

console.log(buffer.length-1);
