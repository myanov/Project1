"use strict";

const personalMoviesDB = {
	count: '',
	movie: {},
	actor: {},
	ganre: [],
	private: false,

	start: function () {
		this.count = +prompt('Сколько фильмов вы посмотрели в этом году?', '');

		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы посмотрели в этом году?', '');
		}
	},

	showMyDB: function () {
		if (this.private === false) {
			console.log(personalMoviesDB);
		}
		else {
			alert("Это закрытая информация!");
		}
	},

	writeYourGanre() {
		for (let i = 1; i < 4; i++) {
			let ganre = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (ganre == '' || ganre == null) {
				i--;
			}
			else {
				this.ganre.push(ganre);
			}
		}

		this.ganre.forEach(function(item, index) {
			console.log(`Любимый жанр #${index+1} - это ${item}`);
		});
	},

	askAboutFilms: function () {
		let i = 0;
		while (i < 2) {
			const a = prompt('Один из просмотренных вами фильмов?', ""),
				b = +prompt('На сколько баллов вы его оцените?', "");

			if (a != '' && a != null && a.length <= 50) {
				this.movie[a] = b;
				i++;
			}
		}
	},

	toggleVisible: function () {
		this.private = !this.private;
	}
};

// personalMoviesDB.start();
// personalMoviesDB.writeYourGanre();
personalMoviesDB.toggleVisible();
personalMoviesDB.showMyDB();

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