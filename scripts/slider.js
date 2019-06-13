"use strict";

let firstSlide = document.getElementById('firstSlide');
let secondSlide = document.getElementById('secondSlide');
let thirdSlide = document.getElementById('thirdSlide');

function isVisible(element) {
	return element.style.display !== 'none';
}

function hideElement(element) {
	element.style.display = 'none';
}

function showElement(element) {
	element.style.display = 'block';
}

function nextSlide() {
	if (isVisible(firstSlide)) {
		hideElement(firstSlide);
		showElement(secondSlide);
	} else if (isVisible(secondSlide)) {
		hideElement(secondSlide);
		showElement(thirdSlide);
	} else if (isVisible(thirdSlide)) {
		hideElement(thirdSlide);
		showElement(firstSlide);
	}
}

function previousSlide() {
	if (isVisible(firstSlide)) {
		hideElement(firstSlide);
		showElement(thirdSlide);
	} else if (isVisible(secondSlide)) {
		hideElement(secondSlide);
		showElement(firstSlide);
	} else if (isVisible(thirdSlide)) {
		hideElement(thirdSlide);
		showElement(secondSlide);
	}
}
