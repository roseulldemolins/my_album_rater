const Album = require('../models/albums.js');

class AddAlbum {

  constructor(element) {
    this.element = element;
    this.hide = document.querySelector('.add-form')
  }

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newEntry = {};
      newEntry.album_title = evt.target.title.value;
      newEntry.artist = evt.target.artist.value;
      newEntry.year = evt.target.year.value;
      newEntry.genre = evt.target.genre.value;
      newEntry.label = evt.target.label.value;

      console.log(newEntry);
      const newAlbum = new Album();
      console.log(newAlbum);
      newAlbum.postData(newEntry);

      this.element.reset();
      this.hide.style.visibility = 'hidden';
    })

  }
}

module.exports = AddAlbum;
