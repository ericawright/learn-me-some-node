var fs = require('fs')

var contents = fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
  var lines = data.split('\n').length - 1
  console.log(lines);
})



