'use strict';

/* Проверка на подчёркивание пунктов меню */
let trigger = document.getElementById('trigger');
let selectId = document.getElementById('select-1');
let selectItem = document.querySelectorAll('.select__item');

trigger.addEventListener('click', () => {
	document.querySelector('[data-link-select]').classList.toggle('no-after');
	// if (selectId.classList.contains('select_show')) {
	// 	document.querySelector('[data-link-select]').classList.remove('no-after');
	// 	console.log('remove');
	// } else {
	// 	document.querySelector('[data-link-select]').classList.add('no-after');

	// }
});

selectItem.forEach((elem) => {
	elem.addEventListener('click', () => {
		document.querySelector('[data-link-select]').classList.toggle('no-after');
		// if (selectId.classList.contains('select_show')) {
		// 	document.querySelector('[data-link-select]').classList.remove('no-after');
		// }
	});
});
