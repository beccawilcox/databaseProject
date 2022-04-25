var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

const express = require("express");
const app = express();

var name="";
var age=18;
var vip="off";
var ga="off";
var coachella="off";
var lolla="off";
var lostlands="off";
var type="";
var festival = "";
var wristband_id = 1;
var year = 2019;
var aa = "off";



app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());

app.post('/add', function(req,res){ //this gets the values from the form in index.html
  name=req.body.name;
  age=req.body.age;
  coachella=req.body.coach;
  lolla=req.body.lolla;
  lostlands=req.body.lost;
  vip=req.body.vip;
  ga=req.body.reg;
  aa = req.body.aa;
  res.redirect('/add');  

if (aa=="on") type="AA";
if (vip=="on") type="VIP"; 
    else type="GA";

  if (coachella=="on") 
    festival="Coachella";
    year = 2019;
  if (lostlands=="on") 
    festival="Lost Lands";
    year = 2021;
  if (lolla=="on") 
      festival="Lollapalooza";
        year = 2021;


  wristband_id = Math.floor(1000000 + Math.random() * 9000000);

db.run('INSERT INTO Attendee(wristband_id, name, age, ticket_type) VALUES(0' + wristband_id+ ', \''+ name + '\', ' + age + ', \'' + type + '\')');
db.run('INSERT INTO Attends(wristband_id, name, year) VALUES(0' + wristband_id+ ', \''+ festival + '\', ' + year + ')');
  db.close()
console.log('connection closed')

});




let db = new sqlite3.Database('./test.db',(err)=>{

  if(err)
  {
      console.log('u fucked up')
  }
console.log('yay')


})




app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); //this serves the file when localhost:3000 is put in browser after running node app2.js in commandline
});

app.get("/add", function (req, res) {
    res.sendFile(__dirname + "/success.html"); //this serves the file when localhost:3000 is put in browser after running node app2.js in commandline
});

app.listen(3000,function(){console.log("Server listening on port: 3000");});


