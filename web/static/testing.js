var sqlite3 = require('sqlite3');
var festival = "Coachella"



let db = new sqlite3.Database('./test.db',(err)=>{

  if(err)
  {
      console.log('u fucked up')
  }
console.log('yay')
});


var artists = db.all('SELECT P.name FROM Attends A, Performer P WHERE A.name="'+festival+'" AND P.performer_id = A.wristband_id', function(err, data) {
if (err) {
  console.log(err);
}

console.log(data);
});






