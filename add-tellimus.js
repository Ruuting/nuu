//Reading JSON file
var fs = require('fs');
var object = JSON.parse(fs.readFileSync('tellimused.json', 'utf8'));




//Adding a new object
object.Ingmar = {appearance: "ilus","atomic_mass":7,"boil":9603};

//Writing results to JSON file
fs.writeFileSync('tellimused.json', JSON.stringify(object));
