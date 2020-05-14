(function(){
	'use strict'
	var mobileSize = window.matchMedia("(max-width: 799px)");
	let f = function() {
		let fixedHeader = document.querySelector('.fixedHeader');

		let eventHandler = function(event) {
			let x = window.pageYOffset;
			if (x > 20) {
				fixedHeader.style.top = 0;
			} else {
				fixedHeader.style.top = '-150%';
			};
		};

		window.addEventListener('scroll', eventHandler);
	};

	document.addEventListener('DOMContentLoaded', f);
}());