const Album = require('./models/albums.js');
const AlbumsView = require('./views/albums_view.js')

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

  const album = new Album();
  const albumsView = new AlbumsView();
});
