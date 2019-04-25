class AlbumButton {

  constructor() {
    this.element = document.querySelector('#save')
    this.reveal = document.querySelector('.add-form')
  }

  revealButton() {
    this.element.addEventListener('click', () => {
      this.reveal.style.visibility = 'visible';
    })
  }

}

module.exports = AlbumButton;
