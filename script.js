'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  getAmountFilms: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    }
  },
  rememberFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilmWhichSaw = prompt(
        'Один из последних просмотренных фильмов'
      );
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('просмотрено довольно мало фильм');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('вы классный зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('вы киноман');
    } else {
      ('Ошибка');
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i <= 2; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

      if (genre == null || genre == '') {
        i--;
      } else personalMovieDB.genres[i] = genre;
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};

personalMovieDB.getAmountFilms();
personalMovieDB.rememberFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
