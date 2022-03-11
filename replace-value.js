var data = {
  "responses": {
    "firstKey": {
      "items": {
        "name": "test name one"
      }
    },
    "anotherKey": {
      "items": {
        "name": "test name two"
      }
    },
    "oneMoreKey": {
      "items": {
        "name": "John"
      }
    }
  }
};

for(var key in data.responses){
    if ((data.responses[key].items.name).match(/test name/)){
       data.responses[key].items.name = "N/A";
    } 
}

console.log(JSON.stringify(data));