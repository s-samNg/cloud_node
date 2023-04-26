const express = require('express'); 
const router = express(); 
const woodsCtrl = require("../controllers/woods.js"); 
const auth = require("../middleware/auth.js")

// router.get('/woods', function (req, res) { res.send('List of woods'); });

router.get("/", woodsCtrl.readALL); 

router.get("/:hardness", woodsCtrl.findByHardness);

router.get("/", auth, woodsCtrl.readALL);

router.get("/:hardness", auth, woodsCtrl.readByHardness);


module.exports = router;