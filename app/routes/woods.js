const express = require('express'); 
const router = express(); 

router.get('/signup', function (req, res) { res.send('List of woods'); });

module.exports = router;