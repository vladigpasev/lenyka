var mysql = require('mysql');

var con = mysql.createConnection({
  host: "s.abax.bg",
  user: "lenyka_online",
  password: "s2E77wf-sCC--ff"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});