var mysql = require('mysql');

var con = mysql.createConnection({
  host: "s.abax.bg",
  user: "lenyka_online",
  password: "s2E77wf-sCC--ff",
  database: "lenyka_online"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT ID, group_name, group_code, group_MSlink, group_nivel, teacher_name, onlpris FROM groups ORDER BY ID ASC", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});