
let mysql = require('mysql');
let bodyParser = require("body-parser");
let express = require('express');
var cors = require('cors');
var exp = express();

const PORT = process.env.PORT || 8002;

exp.use(cors())
exp.use(express.json())
exp.use(bodyParser.urlencoded({ extended: false }));


var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "adem123",
  database: "reclamer",

})
exp.get('/login',function(req,res){
    res.send('Hello!')
 })
  exp.post('/login', function(req, res){
        var id=req.body.id;
        var mdp = req.body.mdp;

        con.query("SELECT * FROM clients where id_client = ", + mysql.escape(id), function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
        });
  
    
   

  exp.listen(PORT, console.log(`Server started on port ${PORT}`));