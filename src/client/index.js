
let bodyParser = require("body-parser");
let express = require('express');
var cors = require('cors');
var exp = express();
const serverRoutes = require("./client.router");
const PORT = process.env.PORT || 8001;

exp.use(cors())
exp.use(express.json());
exp.use(bodyParser.urlencoded({ extended: false }));
exp.use(serverRoutes);
exp.use((error, req, res, next) => {
  
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
exp.listen(PORT,()=>console.log("server running"));



