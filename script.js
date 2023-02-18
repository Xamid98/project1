'use strict';

let numberOfFilms;

function getAmountFilms() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}

getAmountFilms();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilmWhichSaw = prompt('Один из последних просмотренных фильмов');
    const yourGradeForLastFilm = prompt('На сколько оцените его?');

    if (
      lastFilmWhichSaw !== null &&
      yourGradeForLastFilm !== null &&
      lastFilmWhichSaw !== '' &&
      yourGradeForLastFilm !== '' &&
      lastFilmWhichSaw.length < 50
    ) {
      personalMovieDB.movies[lastFilmWhichSaw] = yourGradeForLastFilm;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильм');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('вы классный зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
  } else {
    ('Ошибка');
  }
}

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 0; i <= 2; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
  }
}

detectPersonalLevel();
rememberFilms();
writeYourGenres();
showMyDB();
