var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('omlet', { title: 'Search Results for Omlet' });
});

module.exports = router;