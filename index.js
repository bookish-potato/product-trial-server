const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;
const names = [];
app.use(bodyParser.json())

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello World!");
});

app.get("/time", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send(new Date().toString());
});

app.get("/names/:name", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  var nameInput = req.params.name;
  if (names.includes(nameInput))
  {
    res.send(`Hello! Your name is ${nameInput}. `);
  }
  else 
  {
    res.send(`Sorry! Name not found!`)
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
  res.send("A new name is added successfully!")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
