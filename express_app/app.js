var express = require("express");
var app = express();

app.listen(8080);

app.get("/", function(req, res) {
  res.status(200).send("hello world!");
});

app.get("/demo", function(req, res) {
  res.status(200).send("hello demo route!");
});
