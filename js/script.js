(function(){
	'use strict'
	var mobileSize = window.matchMedia("(max-width: 799px)");
	let f = function() {
		// if (mobileSize.matches) {
		// 	return console.log('cases mobile');
		// };
		let topFixed = 150;
		let cs = document.querySelector('.casesSection');
		let textsBox = document.querySelector('.casesSectionTextsWrapper');
		let textsBoxHeight = textsBox.getBoundingClientRect().height;
		/*
		let casesImg = document.querySelectorAll('.casesUnitImgOverflow');
		casesImg = Array.from(casesImg);
		casesImg.forEach((el) => {
			console.log(el);
			el.style.height = textsBoxHeight + 100 + 'px';
		});
		*/
		let case2Img = document.querySelector('#case-2');
		let animeLine = document.querySelector('.casesSectionLine');
		let textsHeight = document.querySelector('.casesSlideUnitTextWrapper').getBoundingClientRect().height;
		console.log(animeLine);
		console.log(textsHeight);
		animeLine.style.height = textsHeight + 'px';
		let csTop = cs.getBoundingClientRect().top;
		let stopScrollEffect = document.querySelector('#stopScrollEffect');
		textsBox.style.top = csTop + topFixed + 'px';
		let fixedHeader = document.querySelector('.fixedHeader');
		// let regua = document.querySelector('#regua');
		let icons = document.getElementsByClassName('servicosUnit');
		icons = Array.from(icons);

		let eventHandler = function(event) {
			let x = window.pageYOffset;
			if (x > 100) {
				fixedHeader.style.top = 0;
			} else {
				fixedHeader.style.top = '-150%';
			}
			let windowHeight = window.innerHeight;
			let centerLine = x + windowHeight / 2;
			// regua.style.top = centerLine + 'px';
			console.log(windowHeight);
			console.log('page Y offset ' + x);
			let csHeight = cs.getBoundingClientRect().height;
			csTop = cs.getBoundingClientRect().top;
			console.log('cases top ' + csTop);
			let csBottom = cs.getBoundingClientRect().bottom - windowHeight;
			console.log('cases bottom ' + csBottom);
			let textsBoxTop = textsBox.getBoundingClientRect().top - topFixed;
			console.log('topo textos ' + textsBoxTop);
			let stopScrollEffectTop = stopScrollEffect.getBoundingClientRect().top - topFixed;
			let lastPhotoTop = document.querySelector('#stopScrollEffect').getBoundingClientRect().top - topFixed;
			let case2ImgTop = case2Img.getBoundingClientRect().top + x;
			let case3ImgTop = stopScrollEffect.getBoundingClientRect().top + x;
			console.log('topo img2 case ' + case2ImgTop);
			console.log('topo img3 case ' + case3ImgTop);
			console.log('linha central ' + centerLine);
			console.log('topo ultima foto' + lastPhotoTop);


			icons.forEach((el) => {
				let iconTop = el.getBoundingClientRect().top + windowHeight / 2;
				console.log('iconTop ' + iconTop);
				if(iconTop < centerLine) {
					el.style.top = '0%';
					el.style.opacity = '1';
				};
			});


			if(Math.sign(csTop) == -1 && Math.sign(lastPhotoTop) == 1) {
				console.log('entrou no if');
				textsBox.style.top = topFixed + 'px';
				if(case2ImgTop < centerLine && case3ImgTop > centerLine) {
					console.log('if linha')
					animeLine.style.bottom = '0';
					animeLine.style.top = '50%';
					animeLine.style.transform = 'translateY(-50%)';
				} else if (case3ImgTop < centerLine) {
					console.log('else if linha')
					animeLine.style.top = '87%';
					animeLine.style.bottom = '0';
					animeLine.style.transform = 'translateY(-50%)';
				} else {
					console.log('else linha')
					animeLine.style.bottom = '0';
					animeLine.style.top = '0';
					animeLine.style.transform = 'translateY(0%)';
				}
			} else if (Math.sign(lastPhotoTop) == -1) {
				console.log('entrou no else if');
				return textsBox.style.top = lastPhotoTop + topFixed + 'px';
			} else {
				textsBox.style.top = csTop + topFixed + 'px';
				console.log('else');
			};

		};

		window.addEventListener('scroll', eventHandler);
	};

	document.addEventListener('DOMContentLoaded', f);
}());