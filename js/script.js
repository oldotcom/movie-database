'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Ліга справедливості",
        "Ла-ла ленд",
        "Одержимість",
        "Скотт Пілігрим проти..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
      
adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. ${film};
        </li>
    `;
});