//CONSOLE INFO

const users = require("./tooted");

console.log(users);

//EXPRESS

const express = require("express");
const app = express();

//////
const port = 3000;

//CORS

var fs=require('fs');
var data=fs.readFileSync('tellimused.json');
var elements=JSON.parse(data);
const cors=require('cors');

//TOOTED

app.get("/", (req, res) => res.send("Ingmari API"));
app.get("/products", (req,res) => {

	const users = require("./tooted");
	res.json(users);
})

//Test
app.get("/orders", (req,res) => {

	const users = require("./orders");
	res.json(users);
})
////////////////////

app.listen(port, () => console.log(`Local port ${port}!`));

//SIIT TULEB NESTED LUGEMINE CORSIGA

app.use(cors());
app.get('/elements',alldata);
function alldata(request,response)
{
    response.send(elements);
}
app.get('/elements/:element/',searchElement);
function searchElement(request,response)
{
	var word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(elements[word])
	{
		var reply=elements[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil); //boil on lisainfo konsoolis
	response.send(reply); //ilma selleta ei näita ala-infot

}

