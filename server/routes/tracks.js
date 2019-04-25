var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');

/* GET home page. */
router.get("/", function(req, res, next) {
  res.status(200).json({ title: "Express" });
});

module.exports = router;
