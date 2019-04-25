const Album = require('./models/albums.js');
const AlbumsView = require('./views/albums_view.js');
const AddAlbum = require('./views/add_album_view.js');
const AlbumButton = require('./views/add_album_button.js');

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");
  const container = document.querySelector('#albums-container');
  const addForm = document.querySelector('#add-form');

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
  const addAlbum = new AddAlbum(addForm);
  const button = new AlbumButton();

  button.revealButton();

  albumsView.render(object);

});
