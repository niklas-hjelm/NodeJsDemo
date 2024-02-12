const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const triviaUrl =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean";

  const response = await fetch(triviaUrl);

  const results = await response.json();
  console.log(results);
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
