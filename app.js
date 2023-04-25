const express = require('express')
const app = express() 
module.exports = app;
const router = require("./app/routes/index.js");
app.use("/api", router);


const db = require("./app/models/index.js"); 
db.sequelize
 .authenticate() 
 .then(() => console.log("Database connected ...")) 
 .catch((err) => console.log(err));
