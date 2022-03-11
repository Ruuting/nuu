var myObject = [    
    {
        "Name" : "test1",
        "id" : "1",
        "groups" : [
            { "id" : "test1", 
              "name" : "test group 1", 
              "desc" : "this is a test group"
             },
            { "id" : "test2",
              "name" : "test group 2",
              "desc" : "this is another test group"
             }
        ]
    },
    {
        "Name" : "test2",
        "id" : "2",
        "groups" : [
            { "id" : "test3", 
              "name" : "test group 4", 
              "desc" : "this is a test group"
             },
            { "id" : "test4",
              "name" : "test group 4",
              "desc" : "this is another test group"
             }
        ]
    },
     {
        "Name" : "app3",
        "id" : "3",
        "groups" : [
            { "id" : "test5", 
              "name" : "test group 5", 
              "desc" : "this is a test group"
             },
            { "id" : "test6",
              "name" : "test group 6",
              "desc" : "this is another test group"
             }
        ]
    }
    
    ];
    
var myObject2 = [    
    {
        "Appname" : "app1",
        "id" : "1"
    },
    {
        "Appname" : "app1",
        "id" : "2"
    },
     {
        "Appname" : "app3",
        "id" : "3"
    }
    
    ];

function findAndReplace(object, value, replacevalue){
  for(var x in object){
    if(typeof object[x] == typeof {}){
      findAndReplace(object[x], value, replacevalue);
    }
    if(object[x] == value){ 
      object["name"] = replacevalue;
      // break; // uncomment to stop after first replacement
    }
  }
}

function findAndReplace2(object, value, replacevalue){
  for(var x in object){
    if(typeof object[x] == typeof {}){
      findAndReplace2(object[x], value, replacevalue);
    }
    if(object[x] == value){ 
      object["Appname"] = replacevalue;
      // break; // uncomment to stop after first replacement
    }
  }
}

findAndReplace(myObject, "test1", "TEST REPLACED");


console.log(myObject);

findAndReplace2(myObject2, "app1", "APP2");
console.log(myObject2);