"use strict";

const filmsCount = +prompt('Сколько фильмов вы посмотрели в этом году?', '');

const personalMoviesDB = {
	count: filmsCount,
	movie: {},
	actor: {},
	ganre: [],
	private: false
};

const a = prompt('Один из просмотренных вами фильмов?', ""),
	b = +prompt('На сколько баллов вы его оцените?', ""),
	c = prompt('Один из просмотренных вами фильмов?', ""),
	d = +prompt('На сколько баллов вы его оцените?', "");

personalMoviesDB.movie[a] = b;
personalMoviesDB.movie[c] = d;

console.log(personalMoviesDB);