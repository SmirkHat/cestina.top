// Discord-style timestamps - realistic based on current time
(function() {
	const now = new Date();
	const h = now.getHours();
	const stamps = document.querySelectorAll('.ts');
	stamps.forEach((el, i) => {
		// Generate a plausible time in the past
		// If it's early morning (0-9), show "Včera v HH:MM"
		// Otherwise show just "HH:MM" (today format on Discord)
		const offset = (stamps.length - i) * 2 + Math.floor(Math.random() * 3);
		const msgTime = new Date(now.getTime() - offset * 60000);
		const msgH = msgTime.getHours();
		const msgM = String(msgTime.getMinutes()).padStart(2, '0');
		const isYesterday = msgTime.getDate() !== now.getDate();
		if (isYesterday) {
			el.textContent = 'Včera v ' + msgH + ':' + msgM;
		} else {
			el.textContent = msgH + ':' + msgM;
		}
	});
})();

// Swap interaction - hover to reveal mnemonic
document.querySelectorAll('.sw').forEach(el => {
	const original = el.innerHTML;
	const alt = el.getAttribute('data-alt');
	el.addEventListener('mouseenter', () => { el.textContent = alt; });
	el.addEventListener('mouseleave', () => { el.innerHTML = original; });
});

// Share buttons - copy section URL to clipboard
document.querySelectorAll('.share-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		const slug = btn.getAttribute('data-share');
		const url = 'https://cestina.top/' + slug;
		navigator.clipboard.writeText(url).then(() => {
			btn.classList.add('copied');
			btn.querySelector('svg').style.display = 'none';
			btn.textContent = 'Zkopirováno!';
			setTimeout(() => {
				btn.classList.remove('copied');
				btn.innerHTML = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>Sdílet';
			}, 1500);
		});
	});
});
