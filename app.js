console.log('Hello world!')



const mySpecialButton = document.getElementById('my-special-button');
const theSection = document.getElementById('my-special-section');
const theInput = document.getElementById('my-special-input');

mySpecialButton.addEventListener('click', () => {

    // whatever code i put in the cool zone will happen on click
    theSection.textContent = theInput.value;
    theInput.value = '';
});


const mainBackground = document.getElementById('main-background')

const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener('click', () => {
    mainBackground.style.backgroundColor = "#f52c7c"
});

const blueButton = document.getElementById('lightblue-button');
blueButton.addEventListener('click', () => {
    mainBackground.style.backgroundColor = "#71b3c7"
});

const greenButton = document.getElementById('lightgreen-button');
greenButton.addEventListener('click', () => {
    mainBackground.style.backgroundColor = "#acfc32"
});