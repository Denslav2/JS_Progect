let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', '');
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*const a = prompt('Какой последний фильм Вы просмотели?', ''),
      b = prompt('Как Вы его оцениваете?', ''),
      c = prompt('Какой последний фильм Вы просмотели?', ''),
      d = prompt('Как Вы его оцениваете?', '');  

personalMovieDB.movies[a] = b;
personalMovieDB.movies[b] = c;
*/

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой последний фильм Вы просмотели?', ''),
              b = prompt('Как Вы его оцениваете?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Готово');
        } else {
            console.log('Ошибка!');
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Мало фильмов просмотренно");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы любите фильмы");
    } else if (personalMovieDB.count >=30) {
        console.log("Вы киноманьяк!!!");
    } else {
        console.log("Что-то пошло не так!")
    }
}

//detectPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        //const genre = prompt(`Ваш любимый жанр под  номером ${i}`);
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под  номером ${i}`);
    }
}

writeYourGenres();