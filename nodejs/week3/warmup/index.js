const express = require("express");
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies(as sent by API clients)
app.use(express.json());

const router = require("./calculator");
app.use("/calculator", router);

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports = app;
