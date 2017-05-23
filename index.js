var fs = require("fs")
var filepath = './sample.txt';

console.log("Start Reading File !!!!")

fs.readFileSync(filepath)
fs.readFile(filepath, function(err, data){
	if(err){
		console.log(err)
	}
	console.log(data.toString())
})

console.log("Done Reading File !!!")

console.log("Start writing file !!")

fs.writeFile('./output.txt', 'Hello Techminds', function(err, data){
	if(err){
		throw err;
		console.log(err)
	}
	console.log(data)
})

console.log("Done writing File !!!")

var data = fs.readFileSync(filepath)
fs.writeFileSync('uma.txt',data)
