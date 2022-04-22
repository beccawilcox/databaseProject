var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
var app = express();
//var server = http.createServer(app);

console.log(__dirname);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


var db = //access database here


//app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static('file:///C:/Users/becca/AppData/Local/Packages/CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc/LocalState/rootfs/home/beccaw/databaseProject/web/static/'));
//app.use(helmet());
//app.use(limiter);

app.get('/', function(req,res){
  res.sendFile('C:/Users/becca/AppData/Local/Packages/CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc/LocalState/rootfs/home/beccaw/databaseProject/web/static/index.html');
});


app.post('/add', function(req,res){
/*
  db.serialize(()=>{
    db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.body.id, req.body.name], function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log("New employee has been added");
      res.send("New employee has been added into the database with ID = "+req.body.id+ " and Name = "+req.body.name);
    });

});
*/
});


server.listen(3000,function(){
    console.log("Server listening on port: 3000");
})
