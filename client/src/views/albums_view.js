const PubSub = require('../helpers/pub_sub.js');

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
      meta.innerHTML = `<span>Artist: ${albums.artist}</span></br>
                        <span>Year: ${albums.year}</span></br>
                        <span>Genre: ${albums.genre}</span></br>
                        <span>Label: ${albums.label}</span></br>
                        <span>Cover: ${albums.cover}</span></br>`;






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
      rating.classList.add("ui", "star", "rating");







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
      card.appendChild(rating);
      //
      // buttons.appendChild(deleteButton);
      // buttons.appendChild(updateButton);
      // card.appendChild(buttons);




      console.log(card);
      return card;
    }


}


module.exports = AlbumsView;
