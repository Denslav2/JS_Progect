const numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм Вы просмотели?', ''),
      b = prompt('Как Вы его оцениваете?', ''),
      c = prompt('Какой последний фильм Вы просмотели?', ''),
      d = prompt('Как Вы его оцениваете?', '');  

personalMovieDB.movies[a] = b;
personalMovieDB.movies[b] = c;

console.log(personalMovieDB);