const express = require('express'); 
const router = express(); 
const woodsCtrl = require("../controllers/woods.js"); 

// router.get('/woods', function (req, res) { res.send('List of woods'); });

router.get("/woods", woodsCtrl.woods); 


module.exports = router;