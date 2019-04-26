const PubSub = require('../helpers/pub_sub.js');
const Album = require('../models/albums.js');

class AlbumsView{

  constructor (container){
    this.container = container;
  }

  bindEvents() {
      PubSub.subscribe('Albums:DB-data-loaded', (evt) => {
        const albums = evt.detail;
        this.render(albums);
      });
    }

    render(albums) {
      this.clearAlbums();

      albums.forEach((album) => {
        const card = this.createCard(album);
        this.container.appendChild(card);
      });
    }

    clearAlbums() {
      this.container.innerHTML = '';
    }

    createCard(album) {
      const meta = document.createElement('div');
      meta.classList.add('meta');
      meta.innerHTML = `<span>Artist: ${album.artist}</span></br>
                        <span>Year: ${album.year}</span></br>
                        <span>Genre: ${album.genre}</span></br>
                        <span>Label: ${album.label}</span></br>`;






    //
    //
      const header = document.createElement('div');
      header.classList.add("header");
      header.innerHTML = `${album.album_title}`;
    //
      const content = document.createElement('div');
      content.classList.add("content");
    //
      const card = document.createElement('div');
      card.classList.add("ui");
      card.classList.add("card");
    //
      const buttons = document.createElement('div');
      buttons.classList.add("ui", "buttons");


      const rating = document.createElement('div');
      const average = new Album();
      rating.classList.add("ui", "star", "rating");
      rating.dataset.rating = Math.floor(average.getAverage(album.tracks));
      rating.innerHTML = `${rating.dataset.rating} out of 5 baby!`;

      const tracks = document.createElement('div');
      if (album.tracks.length > 0){
        album.tracks.forEach((track) => {
          const trackName = document.createElement('div');
          trackName.innerHTML = `${track.track_number}: ${track.track_title}`
          tracks.appendChild(trackName);
        });
      };


      content.appendChild(header);
      content.appendChild(meta);
      card.appendChild(content);
      content.appendChild(rating);
      content.appendChild(tracks);

      return card;
    }


}


module.exports = AlbumsView;
