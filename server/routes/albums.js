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
  SqlRunner.run("SELECT * FROM albums INNER JOIN tracks ON tracks.album_id = albums.id")
  .then((result) => {
    // TODO: extract to model
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

// SELECT characters.name AS character_name
//
//     "id": "3",
//     "title": "American Beauty",
//     "artist": "The Grateful Dead",
//     "year": 1970,
//     "genre": "Rock",
//     "label": "Warner Brothers",
//     "cover": null
//
//     "id"
//     "title"
//     "rating"
//     "track_number"
//     "album_id"
module.exports = router;
