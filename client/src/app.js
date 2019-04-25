const Album = require('./models/albums.js');
const AlbumsView = require('./views/albums_view.js');
const AddAlbum = require('./views/add_album_view.js');
const AlbumButton = require('./views/add_album_button.js');

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

  const container = document.querySelector('#albums-container');
  const addForm = document.querySelector('#add-form');

  const object = [
    {
      title: 'Origin of Symmetry',
      artist: 'Evanescence',
      year: 1990,
      genre: "Rock in General",
      label: 'codeclan',
      tracks: [
        {
          rating: 4
        },
        {
          rating: 2
        },
        {
          rating: 5
        }
      ]

    },
    {
      title: 'Fallen',
      artist: 'Franz Ferdinand',
      year: 2112,
      genre: "Hyper Gaming EDM",
      label: 'codeclan',
      tracks: [
        {
          rating: 5
        },
        {
          rating: 5
        },
        {
          rating: 5
        }
      ]
    },
    {
      title: 'Skies of Xanadu',
      artist: 'Rush',
      year: 2002,
      genre: "Extreme Prog Metal",
      label: 'codeclan',
      tracks: [
        {
          rating: 2
        },
        {
          rating: 2
        },
        {
          rating: 3
        }
      ]
    }
  ]

  const album = new Album();
  const albumsView = new AlbumsView(container);
  const addAlbum = new AddAlbum(addForm);
  const button = new AlbumButton();

  addAlbum.bindEvents();

  button.revealButton();

  albumsView.render(object);

  $('.rating').rating({
    initialRating: 1,
    maxRating: 5
  });

});
