const express = require('express')
const router = require("./app/routes/index.js");
const db = require("./app/models/index.js"); 
const app = express() 



app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use("/api", router);




db.sequelize
 .authenticate() 
 .then(() => console.log("Database connected ...")) 
 .catch((err) => console.log(err));

 module.exports = app;
