const myMain = () => {
	const urlImgBanner = 'https://iili.io/HPpvCqN.png'; // Free hosting, automatic delete in 24 hrs
	const urlMp3Banner = 'https://dl.sndup.net/m8y6/El%20Tsurito.mp3'; // Free hosting, automatic delete in 24 hrs

	let bannerFrame = window.frames[0];
	let formFrame = window.frames[1];

	const bannerDiv = bannerFrame.document.querySelector('#encabezadoDIV');

	bannerDiv.innerHTML = `<div id="encabezadoDIV" style="width:100%;height:100%;);"><audio controls autoplay style="display:none;"><source src="${urlMp3Banner}" type="audio/mp3"></audio><img src="${urlImgBanner}"><div id="usuarioDIV" style="position:absolute;bottom:6px;right:12px;color:white;"></div></div>`;

	const loginForm = formFrame.document.querySelector('form[name=detect]');
	const submitButton = formFrame.document.querySelector('button[type=submit]');
	const divCaptcha = formFrame.document.querySelector('div[class=g-recaptcha]');

	loginForm.removeAttribute('onsubmit');
	submitButton.setAttribute('type', 'button');

	submitButton.addEventListener('click', () => {
		loginForm.submit();
	});

	divCaptcha.innerHTML = '<h1>#PorUnSiiauSinCaptcha</h1>';
};

window.frames[1].addEventListener('load', myMain, false);
