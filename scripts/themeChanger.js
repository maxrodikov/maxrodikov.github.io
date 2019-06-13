"use strict";

let currentTheme = "light";
let logoImage = document.getElementById('logoImage');

function changeTheme() {
	if (currentTheme === "light")
		setDarkTheme();
	else
		setLightTheme();
}

function setLightTheme() {
	currentTheme = "light";

	document.body.classList.remove("darkTheme");
	logoImage.src = "img/LightLogo.png";
}

function setDarkTheme() {
	currentTheme = "dark";

	document.body.classList.add("darkTheme");
	logoImage.src = "img/DarkLogo.png";
}
