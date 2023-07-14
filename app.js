var express = require("express");
var app = express();

require("dotenv").config();

var port = process.env.Port || 3000;

app.use(express.static(__dirname));

var path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "indexx.html"));
});

app.listen(port);
