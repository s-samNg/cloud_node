const express = require('express'); 
const router = express(); 
const woodsCtrl = require("../controllers/woods.js"); 
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')

// router.get('/woods', function (req, res) { res.send('List of woods'); });



router.get("/", auth, woodsCtrl.readALL);

router.get("/:hardness", auth, woodsCtrl.readByHardness);

router.post("/", auth, multer, woodsCtrl.create);


module.exports = router;