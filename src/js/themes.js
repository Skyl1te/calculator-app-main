const theme1 = document.querySelector('#theme1');
const theme2 = document.querySelector('#theme2');
const theme3 = document.querySelector('#theme3');
const toggleButton = document.querySelector('.circle');

theme1.addEventListener('click', () => {
	toggleButton.style.gridColumnStart = 1;
	document.documentElement.setAttribute('data-theme', 'theme1')
})

theme2.addEventListener('click', () => {
	toggleButton.style.gridColumnStart = 2;
	document.documentElement.setAttribute('data-theme', 'theme2')
})

theme3.addEventListener('click', () => {
	toggleButton.style.gridColumnStart = 3;
	document.documentElement.setAttribute('data-theme', 'theme3')	
})

window.onload = () => {
	document.documentElement.setAttribute('data-theme', 'theme1')
}