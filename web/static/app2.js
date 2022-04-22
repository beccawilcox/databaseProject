var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

const express = require("express");
const app = express();

var name="";
var age=0;
var vip="off";
var reg="off";
var coach="off";
var lola="off";
var lost="off";
var type="";
var year="";


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());

app.post('/add', function(req,res){ //this gets the values from the form in index.html
  name=req.body.name;
  age=req.body.age;
  coach=req.body.coach;
  lola=req.body.lola;
  reg=req.body.reg;
  lost=req.body.lost;
  year=req.body.year;
  vip=req.body.vip;
  console.log("name: " + name);
  console.log("age: " +age);
  console.log("coach?: "+coach);
  console.log("lola?: "+lola);
  console.log("vip: "+vip);
  console.log("reg: "+reg);
A});

if (vip=="on") type="vip";
  else type="reg";


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'becca',
  database : 'test'
});
/*   THIS IS THE DATABASE PART

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  if (coach=="on"){
     var sql = "INSERT INTO attendee (wristband_id, name, age, ticket_type) VALUES ('random int', name, age, type)";
     con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
    };
     var sql = "INSERT INTO Attends (wristband_id, name, age, ticket_type, FOREIGN KEY(name),FOREIGN KEY(year)) VALUES ('random int', name, age, type, 'coachella',year"; 
     con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("second record inserted");
    };
  };

  if (lola=="on"){
     var sql = "INSERT INTO attendee (wristband_id, name, age, ticket_type) VALUES ('random int', name, age, type)";
     con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
    };
     var sql = "INSERT INTO Attends (wristband_id, name, age, ticket_type, FOREIGN KEY(name),FOREIGN KEY(year)) VALUES ('random int', name,age,typer, 'lollapalooza',year";   
     con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("second record inserted");
    };
  };
  if (coach=="on"){
     var sql = "INSERT INTO attendee (wristband_id, name, age, ticket_type) VALUES ('random int', name, age, type)";
     con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
    };
    var sql = "INSERT INTO Attends (wristband_id, name, age, ticket_type, FOREIGN KEY(name),FOREIGN KEY(year)) VALUES ('random int', name, age, type, 'lostlands', year)";
    con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("second record inserted");
    };
};

});

connection.end();

*/

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); //this serves the file when localhost:3000 is put in browser after running node app2.js in commandline
});


app.listen(3000,function(){console.log("Server listening on port: 3000");});
