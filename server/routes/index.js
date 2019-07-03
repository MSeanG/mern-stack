const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('temp/index');
  res.send('Hello there!');
});

module.exports = router;
