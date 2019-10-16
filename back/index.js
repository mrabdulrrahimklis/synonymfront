var cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const synonyms = require("synonyms");
app.use(bodyParser.json());
let synonym;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/", (req, res) => {
  synonym = synonyms(req.body.word);
  console.log("request", req.body);
  console.log("response", res.body);
  res.send({ synonym });
});
app.get("/", (req, res) => {
  res.send(synonym);
});
app.listen(3000, () => console.log(`Example app listening on port 3000`));
