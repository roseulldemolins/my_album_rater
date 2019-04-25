var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');


/* GET all albums. */
router.get('/albums', function(req, res, next) {
  SqlRunner.run("SELECT * FROM albums ORDER BY title ASC")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

/* GET all albums and their tracks */
router.get('/', function(req, res, next) {
  SqlRunner.run("SELECT * FROM albums * FROM tracks INNER JOIN tracks ON tracks.album_id = albums.id")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

module.exports = router;
