const Album = require('../models/albums.js');

describe('album test', () => {
  let album;
  let array;

  beforeEach(() => {
    album = new Album();
    array = [{
      rating: 3
    },
    {
      rating: 3
    },
    {
      rating: 3
    }]
  })

  test('albums gets average rating', () => {
    expect(album.getAverage(array)).toBe(3);
  });

  test('albums gets average rating', () => {
    newArray = [{
      rating: 5,
      info: "string"
    },
    {
      rating: 10,
      info: "album"
    }]
    expect(album.getAverage(newArray)).toBe(7.5);
  });

});
