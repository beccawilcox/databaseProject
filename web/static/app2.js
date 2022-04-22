var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

const express = require("express");
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000,function(){console.log("Server listening on port: 3000");});
