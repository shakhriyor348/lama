let widjet = document.querySelector('.widjet');
let burgerMenu = document.querySelector('.burger-menu');
let backdrop = document.querySelector('.backdrop');
let closeArrow = document.querySelector('.close-arrow');

burgerMenu.addEventListener('click', () => {
	widjet.classList.add('open');
});
closeArrow.addEventListener('click', () => {
	widjet.classList.remove('open');
});
backdrop.addEventListener('click', () => {
	widjet.classList.remove('open');
});