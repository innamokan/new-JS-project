
const numberOfFilms = +prompt("How many films have you already wathed?", "");
const personalMovieDB = {
    count: "numberOfFilms",
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};

const a = prompt('The last film you wathed?', '');
      b = prompt('How much would you rate it?', '');
      c = prompt('The last film you wathed?', '');
      d = prompt('How much would you rate it?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);