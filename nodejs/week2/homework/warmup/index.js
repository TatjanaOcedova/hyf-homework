const express = require("express");
const app = express();

// const router = express.Router();


app.get("/", (req, res) => res.send("nodejs week2 homework"));

//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add", async (request, response) => {
    const { first, second } = request.query;
    const sum = parseInt(first) + parseInt(second);
    response.send(`${sum}`);
  });
  

//GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.get("/numbers/multiply/:first/:second", async (request, response) => {
    const { first, second } = request.params;
    const multiply = first * second;
    response.send(`${multiply}`);
  });
  

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports = app;