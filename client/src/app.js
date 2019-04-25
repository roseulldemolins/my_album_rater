const Album = require('./models/albums.js');
const AlbumsView = require('./views/albums_view.js')

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");
  const container = document.querySelector('#albums-container')

  const object = [{
    title: 'Origin of Symmetry',
    artist: 'Evanescence',
    year: 1990,
    genre: "Rock in General",
    label: 'codeclan',
    cover: 'https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d'
  }]

  const album = new Album();
  const albumsView = new AlbumsView(container);

  albumsView.render(object);

});
