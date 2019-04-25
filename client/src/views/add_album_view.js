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
      newEntry.title = evt.target.title.value;
      newEntry.artist = evt.target.artist.value;
      newEntry.year = evt.target.year.value;
      newEntry.genre = evt.target.genre.value;

      const newAlbum = new Album();
      newAlbum.postData(newEntry);

      this.element.reset();
      this.hide.style.visibility = 'hidden';
    })

  }
}

module.exports = AddAlbum;
