'use strict';

/* Проверка на подчёркивание пунктов меню */
let trigger = document.getElementById('trigger');
let selectItem = document.querySelectorAll('.select__item');

trigger.addEventListener('click', () => {
	document.querySelector('[data-link-select]').classList.toggle('no-after');
});

selectItem.forEach((elem) => {
	elem.addEventListener('click', () => {
		document.querySelector('[data-link-select]').classList.toggle('no-after');
	});
});

/* слайдер */

let dots = document.querySelectorAll(".slider-dots__item");
let slideIndex = 3;
showSlides(slideIndex);

dots.forEach((elem) => {
	elem.addEventListener('click', () => {
		/* номер текущего слайда */
		let n = elem.getAttribute('data-slide');
		/* Показ нужно слайда*/
		showSlides(slideIndex = n);
	});
});

/* Основная функция слайдера */
function showSlides() {
	let i;
	let slides = document.querySelectorAll('.slider-item');

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

/* end слайдер */
