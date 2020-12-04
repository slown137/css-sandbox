const mySpecialButton = document.getElementById('click-me');
const theSection = document.getElementById('name-output');
const theInput = document.getElementById('name-input');


mySpecialButton.addEventListener('click', () => {
    theSection.textContent = theInput.value;
    theInput.value = '';
});

const pinkButton = document.getElementById('pink-button');
const headerColorChange = document.getElementById('header-color-change');
const footerColorChange = document.getElementById('footer-color-change');

pinkButton.addEventListener('click', () => {
    headerColorChange.style.background = 'pink';
    footerColorChange.style.background = 'pink';
});

const lightGreenButton = document.getElementById('lightgreen-button');

lightGreenButton.addEventListener('click', () => {
    headerColorChange.style.background = 'lightgreen';
    footerColorChange.style.background = 'lightgreen';
});

const lightBlueButton = document.getElementById('lightblue-button');

lightBlueButton.addEventListener('click', () => {
    headerColorChange.style.background = 'rgb(93, 194, 228)';
    footerColorChange.style.background = 'rgb(93, 194, 228)';
});

const rotateButton = document.getElementById('rotate-button');
const mainThing = document.getElementById('main-element');

rotateButton.addEventListener('click', () => {
    mainThing.style.transform = 'rotate(-90deg)';
});