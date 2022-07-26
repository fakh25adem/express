const express = require("express");
const router = express.Router();
const con = require("./dbConnection");
const { body } = require('express-validator');
const controller = require("./client");
const mysql = require("mysql");
con.connect();
 
router.post("/client",[
    body("nom").trim().notEmpty()
    .withMessage('nom is required')
    .not()
    .custom((val) => /[^a-zA-Z\s]/g.test(val))
    .withMessage('nom only charecters')
    .isLength({min:4,max:25})
    .withMessage("nom must contain at least  4 characters "),
    body("prenom").trim().notEmpty()
    .withMessage('prenom is required')
    .not()
    .custom((val) => /[^a-zA-Z\s]/g.test(val))
    .withMessage('prenom only charecters')
    .isLength({min:4,max:25})
    .withMessage("nom must contain at least  4 characters "),
    body("email").isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, { req }) => {
        
        con.query("SELECT * FROM clients WHERE email='fakh5adem@gmail.com'", function (err, result, fields) {
            if (err) throw err;
        console.log(result)    
        if (result.length!=0){
            return Promise.reject('Email already exists!');
        }
            
      })
    }),
    body('tel')
      .trim()
      .notEmpty()
      .withMessage("phoneNumber not empty")
      .isLength({ min: 8 ,max:15})
      .withMessage("phoneNumber must contain at least 8 characters"),
],controller.createUser);


module.exports = router;


