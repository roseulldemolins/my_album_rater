var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');


/* GET all tracks. */
router.get('/', function(req, res, next) {
  SqlRunner.run("SELECT * FROM tracks ORDER BY title ASC")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

// DELETE a track
router.delete('/:id', function(req, res) {
  SqlRunner.run('DELETE FROM tracks WHERE id = $1', [req.params.id])
  .then((result) => {
    res.status(202).json(result);
    });
});

module.exports = router;
