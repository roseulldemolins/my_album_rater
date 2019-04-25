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
      header.innerHTML = `${album.title}`;
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










      // const buttons = document.createElement('div');
      // button.classList.add("ui", "basic", "red", "btn-group");
      // button.innerHTML = "Delete";
      // button.classList.add("ui", "basic", "blue", "btn-group");
      // button.innerHTML = "Update";


      // const deleteButton = document.createElement('button');
      // deleteButton.classList.add("ui", "basic", "red", "button",);
      // deleteButton.value = flower.id;
      // deleteButton.innerHTML = "Delete";
      // deleteButton.addEventListener('click', (event) => {
      //   console.log(event.target.value);
      //
      // });
      //
      //
      // const updateButton = document.createElement("div", "button");
      // updateButton.classList.add("ui", "basic", "blue", "button");
      // // updateButton.id = `update ${flower.id}`;
      // updateButton.innerHTML = "Update";
      //
      //
      //
      //
      content.appendChild(header);
      content.appendChild(meta);
      card.appendChild(content);
      content.appendChild(rating);

      //
      // buttons.appendChild(deleteButton);
      // buttons.appendChild(updateButton);
      // card.appendChild(buttons);




      console.log(card);
      return card;
    }


}


module.exports = AlbumsView;
