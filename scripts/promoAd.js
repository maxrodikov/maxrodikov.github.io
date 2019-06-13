"use strict";

if (localStorage.getItem("promoAdClosed") === "true")
	closePromoAd();

function closePromoAd() {
	let promoAd = document.getElementById("promoAd");
	promoAd.remove();

	localStorage.setItem("promoAdClosed", "true");
}
