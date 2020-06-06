"use strict";

let filmsCount;

function start() {
	filmsCount = +prompt('Сколько фильмов вы посмотрели в этом году?', '');

	while (filmsCount == '' || filmsCount == null || isNaN(filmsCount)) {
		filmsCount = +prompt('Сколько фильмов вы посмотрели в этом году?', '');
	}
}

function showMyDB() {
	if (personalMoviesDB.private === false) {
		console.log(personalMoviesDB);
	}
}

function writeYourGanre() {
	for (let i = 1; i < 4; i++) {
		let ganre = prompt(`Ваш любимый жанр под номером ${i}`, '');
		if (ganre == '' || ganre == null) {
			i--;
		}
		else {
			personalMoviesDB.ganre.push(ganre);
		}
	}
}

function askAboutFilms() {
	let i = 0;
	while (i < 2) {
		const a = prompt('Один из просмотренных вами фильмов?', ""),
			b = +prompt('На сколько баллов вы его оцените?', "");

		if (a != '' && a != null && a.length <= 50) {
			personalMoviesDB.movie[a] = b;
			i++;
		}
	}
}

const personalMoviesDB = {
	count: filmsCount,
	movie: {},
	actor: {},
	ganre: [],
	private: false
};

if (personalMoviesDB.count < 10) {
	alert("Просмотренно довольно мало фильмов");
}
else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
	alert("Вы классический зритель");
}
else if (personalMoviesDB.count >= 30) {
	alert("Да вы оказывается киноман!");
}
else {
	alert("Произошла ошибка!");
}

console.log(personalMoviesDB);