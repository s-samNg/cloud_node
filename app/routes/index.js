const express = require('express')
const router = express();


const userRoutes = require('./user.js') 
//Ce fichier n’existe pas encore. 
router.use("/auth", userRoutes)

const woodsRoutes = require('./woods.js')
router.use("/woods", woodsRoutes)


module.exports = router

