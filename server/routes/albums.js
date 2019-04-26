var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');
const organiser = require('../models/track_organiser')

/* GET all albums and their tracks. */
router.get('/all', function(req, res, next) {
  SqlRunner.run(`SELECT * FROM albums`)
  .then((albums)=>{
    SqlRunner.run(`SELECT * FROM tracks`)
    .then((tracks)=>{
      const albumList = albums.rows;
      const trackList = tracks.rows;

      albumList.forEach((album)=>{
        album.tracks=[];
        trackList.forEach((track)=>{
          if(track.album_id==album.id){
            album.tracks.push(track)
          };
        });
      });
      res.status(200).json(albumList);
    });
  });
});

/* GET all albums. */
router.get('/', function(req, res, next) {
  SqlRunner.run("SELECT * FROM albums")
  .then((result)=>{
    res.status(200).json(result.rows);
  })
});

/* GET all albums and their tracks */
router.get('/test', function(req, res, next) {
  SqlRunner.run("SELECT * FROM albums INNER JOIN tracks ON tracks.album_id = albums.id")
  .then((result) => {
    // TODO: extract to model
    //organiser.trackOrganiser(result);
    //  add array of track objects to the album object
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

// CREATE a new album
router.post('/', function(req, res){
  SqlRunner.run('INSERT INTO movies (album_title, artist, year, genre, lable) VALUES ($1, $2, $3, $4, $5)', [req.body.album_title, req.body.artist, req.body.year,req.body.genre,req.body.lable])
  .then((result) => {
    res.status(201).json(result);
  });
});

module.exports = router;
