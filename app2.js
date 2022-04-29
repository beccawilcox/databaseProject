var sqlite3 = require('sqlite3');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');

const express = require("express");
const app = express();
let ejs = require('ejs');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

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
var art = "";
var artists= "";

app.use(bodyParser.urlencoded({extended: false}));

app.post('/success', function(req,res){ //this gets the values from the form in index.html
  name=req.body.name;
  age=req.body.age;
  coachella=req.body.coach;
  lolla=req.body.lola;
  lostlands=req.body.lost;
  vip=req.body.vip;
  ga=req.body.reg;
  aa = req.body.aa;

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

console.log("festival is: "+festival);


var artis = db.all('SELECT P.name FROM Attends A, Performer P WHERE A.name="'+festival+'" AND P.performer_id = A.wristband_id', function(err, data) {
if (err) {
  console.log(err);
}
for(let i=0; i<data.length; i++){
  art += JSON.stringify(data[i]).substring(9,data[i].length).slice(0,-2)+", ";

};
  res.render('success.html', { festival:festival, artist:art});
});


db.close();
console.log('connection to db closed');

artists = JSON.stringify(artis);

console.log(artists);
});


let db = new sqlite3.Database('./test.db',(err)=>{

  if(err)
  {
      console.log('u fucked up')
  }
console.log('yay')


})



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html"); //this serves the file when localhost:3000 is put in browser after running node app2.js in commandline
});


app.listen(3000,function(){console.log("Server listening on port: 3000");});


