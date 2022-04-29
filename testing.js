var sqlite3 = require('sqlite3');
var festival = "Coachella"

var art=[];

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
for(let i=0; i<data.length; i++){
  art[i] = JSON.stringify(data[i]).substring(9,data[i].length).slice(0,-2);
 // console.log(art[i]);

};
});

art = JSON.stringify(artists);

console.log(art);
