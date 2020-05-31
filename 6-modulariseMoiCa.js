let myModule = require("./myModule.js");

myModule(process.argv[2], process.argv[3], (err, files) => {
	files.forEach(file => console.log(file));
});
