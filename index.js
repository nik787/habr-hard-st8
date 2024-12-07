const burgerEl = document.querySelector('.header__burger');
const headerEl = document.querySelector('.header');

burgerEl.onclick = function () {
    headerEl.classList.toggle("header--open");
}