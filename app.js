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
    mainBackground.style.backgroundColor = "#ff00bf"
});

const blueButton = document.getElementById('lightblue-button');
blueButton.addEventListener('click', () => {
    mainBackground.style.backgroundColor = "#71b3c7"
});

const greenButton = document.getElementById('lightgreen-button');
greenButton.addEventListener('click', () => {
    mainBackground.style.backgroundColor = "#acfc32"
});

const nametagColor = document.getElementById('nametag')

const pinkNameTagColor = document.getElementById('pink-nametag');
pinkNameTagColor.addEventListener('click', () => {
    nametagColor.style.backgroundColor = "#f598cd"
});

const yellowNameTagColor = document.getElementById('yellow-nametag');
yellowNameTagColor.addEventListener('click', () => {
    nametagColor.style.backgroundColor = "#faff70"
});

const lavNameTagColor = document.getElementById('lav-nametag');
lavNameTagColor.addEventListener('click', () => {
    nametagColor.style.backgroundColor = "#9a74f2"
});