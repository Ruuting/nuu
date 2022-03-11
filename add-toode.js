const fs = require("fs");

// STEP 1: Reading JSON file
const users = require("./tooted");

// Defining new user
let user = {
    "main": {
        "0": "Item 1",
        "2": "Item 2"
    }
};

// STEP 2: Adding new data to users object
users.push(user);

// STEP 3: Writing to a file
fs.writeFile("tooted.json", JSON.stringify(users), err => {
	
	// Checking for errors
	if (err) throw err;

	console.log("Done writing"); // Success
});
