var fs = require('fs');
var jsonStr = JSON.parse(fs.readFileSync('tellimused.json', 'utf8'));


var obj = JSON.parse(jsonStr);
obj['Ingmar'].push({"appearance":"4","atomic_mass":"pending"});
jsonStr = JSON.stringify(obj);


