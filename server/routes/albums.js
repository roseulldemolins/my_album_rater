var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');
const organiser = require('../models/track_organiser')


/* GET all albums. */
router.get('/', function(req, res, next) {
  SqlRunner.run("SELECT * FROM albums ORDER BY title ASC")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

/* GET all albums and their tracks */
router.get('/all', function(req, res, next) {
  SqlRunner.run("SELECT * FROM albums INNER JOIN tracks ON tracks.album_id = albums.id")
  .then((result) => {
    // TODO: extract to model
    //organiser.trackOrganiser(result);
    //  add array of track objects to the album object
    res.status(200).json(result.rows);
  });
});

/* GET all albums and their tracks */
router.get('/test', function(req, res, next) {
  SqlRunner.run("SELECT albums.title AS [album.title], albums.artist as [album.atrist], tracks.title as [albums.tracks.title], tracks.track_number as [albums.tracks.trackNumber] INNER JOIN tracks ON tracks.album_id = albums.id")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});


// DELETE an album
router.delete('/:id', function(req, res) {
  SqlRunner.run('DELETE FROM albums WHERE id = $1', [req.params.id])
  .then((result) => {
    res.status(202).json(result);
    });
});





module.exports = router;
