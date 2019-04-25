DROP TABLE tracks;
DROP TABLE albums;

CREATE TABLE albums (
	id SERIAL8 PRIMARY KEY,
	album_title VARCHAR(255),
	artist VARCHAR(255),
  year INT2,
  genre VARCHAR(255),
  label VARCHAR(255),
  cover VARCHAR(255)
);

CREATE TABLE tracks (
	id SERIAL8 PRIMARY KEY,
  track_title VARCHAR(255),
  rating INT2,
  track_number INT2,
  album_id INT2 REFERENCES albums(id)
);

INSERT INTO albums (album_title, artist, year, genre, label, cover)
  VALUES ('Disraeli Gears', 'Cream', 1967, 'Rock', 'Reaction', null);
INSERT INTO albums (album_title, artist, year, genre, label, cover)
  VALUES ('Kind of Blue', 'Miles Davis', 1959, 'Jazz', 'Columbia', null);
INSERT INTO albums (album_title, artist, year, genre, label, cover)
  VALUES ('American Beauty', 'The Grateful Dead', 1970, 'Rock', 'Warner Brothers', null);
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Babylon by Bus', 'Bob Marley', 1978, 'Reggae', 'Island', null);
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Two Sevens Clash', 'Culture', 1977, 'Reggae', 'Joe Gibbs', null);
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Electric Ladyland', 'Jimi Hendrix', 1968, 'Rock', 'Track', null);
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Heavy Weather', 'Weather Report', 1977, 'Jazz', 'Columbia', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Djangology', 'Django Reinhardt', 1961, 'Jazz', 'RCA', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Led Zeppelin', 'Led Zeppelin', 1969, 'Rock', 'Atlantic', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Led Zeppelin II', 'Led Zeppelin', 1969, 'Rock', 'Atlantic', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Led Zeppelin III', 'Led Zeppelin', 1970, 'Rock', 'Atlantic', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Led Zeppelin IV', 'Led Zeppelin', 1971, 'Rock', 'Atlantic', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Bookends', 'Simon & Garfunkel', 1968, 'Folk', 'Columbia', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Bridge Over Troubled Water', 'Simon & Garfunkel', 1970, 'Folk', 'Columbia', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Highway 61 Revisited', 'Bob Dylan', 1967, 'Folk', 'Columbia', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Blonde On Blonde', 'Bob Dylan', 1966, 'Folk', 'Columbia', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Bert Jansch', 'Bert Jansch', 1965, 'Folk', 'Transatlantic', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Folk, Blues & Beyond...', 'Davy Graham', 1964, 'Folk', 'Decca', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('The Guitar Player', 'Davy Graham', 1961, 'Folk', 'Pye', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('Curlew River', 'Benjamin Britten', 1965, 'Opera', 'Decca', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('The Burning Fiery Furnace', 'Benjamin Britten', 1967, 'Opera', 'Decca', null);
-- INSERT INTO albums (title, artist, year, genre, label, cover)
-- INSERT INTO albums (album_title, artist, year, genre, label, cover)
--   VALUES ('The Prodigal Son', 'Benjamin Britten', 1970, 'Opera', 'Decca', null);

INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Strange Brew', 4, 1, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Sunshine of Your Love', 5, 2, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('World of Pain', 2, 3, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Dance the Night Away', 3, 4, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Blue Condition', 2, 5, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Tales of Brave Ulysses', 4, 6, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('SWLABR', 4, 7, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Were Going Wrong', 3, 8, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Outside Woman Blues', 5, 9, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Take It Back', 3, 10, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Mothers Lament', 2, 11, 1);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('So What', 3, 1, 2);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Freddie Freeloader', 3, 2, 2);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Blue in Green', 3, 3, 2);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('All Blues', 3, 4, 2);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Flamenco Sketches', 3, 5, 2);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Placeholder track 1', 4, 1, 3);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Placeholder track 2', 4, 2, 3);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Placeholder track 3', 4, 3, 3);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Placeholder track 4', 4, 4, 3);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Placeholder track 5', 4, 5, 3);
INSERT INTO tracks (track_title, rating, track_number, album_id)
  VALUES ('Placeholder track 6', 4, 6, 3);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Dummy track 1', 5, 1, 4);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Dummy track 2', 5, 2, 4);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Dummy track 3', 5, 3, 4);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Dummy track 4', 5, 4, 4);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Dummy track 5', 5, 5, 4);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Dummy track 6', 5, 6, 4);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Test track 1', 2, 1, 5);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Test track 2', 2, 2, 5);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Test track 3', 2, 3, 5);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Test track 4', 2, 4, 5);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Test track 5', 2, 5, 5);
-- INSERT INTO tracks (track_title, rating, track_number, album_id)
--   VALUES ('Test track 6', 2, 6, 5);
