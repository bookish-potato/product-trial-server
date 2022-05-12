const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');
const app = express();
const port = 3000;
const names = [];
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
	console.log(`${new Date()} ${req.method} ${req.path}`);
	res.send({ message: "Hello World!" });
});

app.get("/time", (req, res) => {
	console.log(`${new Date()} ${req.method} ${req.path}`);
	res.send({ message: new Date().toString() });
});

app.get("/names/:name", (req, res) => {
	console.log(`${new Date()} ${req.method} ${req.path}`);
	var nameInput = req.params.name;
	if (names.includes(nameInput)) {
		res.send({ message: `Hello! Your name is ${nameInput}. ` });
	}
	else {
		res.send({ message: `Sorry! Name not found!` });
	}
});

/*  the request body contract
{
  "name": string
}
*/
app.post("/names/add", (req, res) => {
	console.log(`${new Date()} ${req.method} ${req.path}`);
	const nameInput = req.body.name
	names.push(nameInput)
	res.send({ message: "A new name is added successfully!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
