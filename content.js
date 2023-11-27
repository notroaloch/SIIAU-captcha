const myMain = () => {
	let formFrame = window.frames[1];

	const loginForm = formFrame.document.querySelector('form[name=detect]');
	const submitButton = formFrame.document.querySelector('button[type=submit]');
	const divCaptcha = formFrame.document.querySelector('div[class=g-recaptcha]');

	loginForm.removeAttribute('onsubmit');
	submitButton.setAttribute('type', 'button');

	submitButton.addEventListener('click', () => {
		loginForm.submit();
	});

	divCaptcha.innerHTML = '';
};

window.frames[1].addEventListener('load', myMain, false);
