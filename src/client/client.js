// import Create from './Create/creer';

const { validationResult } = require('express-validator');
const con = require("./dbConnection");
// const email= req.body.email;


// exp.post('/client', function (req, res) {
//     const email=req.body.email;
//     const nom =req.body.nom;
//     body("nom").custom((val) => /[^A-za-z0-9\s]/g.test(val))
//     .withMessage('Nom not use uniqe characters')
//     .isLength({min:4})
  
// });

exports.createUser = async(req,res,next)=>{
  const {nom,prenom,email,tel} = req.body;
  const errors = validationResult(req);
 try {
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422; // donneé de user faut 
    error.data = errors.array();
    throw error;
  }
  

  const sql="INSERT INTO clients (nom,prenom,email,adress) VALUES ?";
  con.query(sql,[nom,prenom,email,tel], function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
    console.log("Number of rows affected : " + result.affectedRows);
 
  });
 } catch (err) {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  next(err);
 } 
}

  






