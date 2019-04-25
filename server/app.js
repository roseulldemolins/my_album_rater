var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var albumRouter = require("./routes/albums");
var trackRouter = require("./routes/tracks");

var app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", albumRouter);
app.use("/track", trackRouter);

module.exports = app;
