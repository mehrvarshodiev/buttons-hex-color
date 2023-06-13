const btnContainer = document.querySelector('.btn-container');
const generateBtn = document.querySelector('#generateBtn');
for (let i = 1; i <= 30; i++) {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.textContent = '#800080';
	btn.title = 'copy to clipboard';
	btnContainer.appendChild(btn);
}

function randomHexCode() {
	let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
	return `#${randomHex}`;
}

generateBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let generateBtnTextContent = e.target.textContent;
	generateBtn.textContent = `Generating...`;
	setTimeout(() => {
		randomHexColor();
		generateBtn.textContent = generateBtnTextContent;
	}, 1000);
});

function randomHexColor() {
	const btns = document.querySelectorAll('.btn');

	btns.forEach((btn) => {
		let hexCode = randomHexCode();
		btn.style.backgroundColor = hexCode;
		btn.textContent = hexCode;
		btn.addEventListener('click', (evt) => {
			const btnTexContent = evt.target.textContent;
			navigator.clipboard.writeText(btnTexContent);
			setTimeout(() => (btn.textContent = 'copied!'), 10);
			setTimeout(() => (btn.textContent = btnTexContent), 1000);
			if (btn.textContent == 'copied') {
				alert('color already has been copied!');
			}
		});
	});
}

randomHexColor();

// setInterval(randomHexColor, 1000);
