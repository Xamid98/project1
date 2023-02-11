const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilmWhichSaw = prompt('Один из последних просмотренных фильмов');
const yourGradeForLastFilm = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilmWhichSaw] = yourGradeForLastFilm;

console.log(personalMovieDB);
