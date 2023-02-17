'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const lastFilmWhichSaw = prompt('Один из последних просмотренных фильмов');
  const yourGradeForLastFilm = prompt('На сколько оцените его?');

  if (lastFilmWhichSaw !== false && yourGradeForLastFilm !== false) {
    personalMovieDB.movies[lastFilmWhichSaw] = yourGradeForLastFilm;
  }
}

console.log(personalMovieDB);
