let nbSquares = 16;

//Select container
const container = document.querySelector('div.container');

createGrid();
addHoverEffect();

//Add button behavior
const button = document.querySelector('.btn');
button.addEventListener('click', inputNbSquares);
function inputNbSquares (e) {
    nbSquares = Number(window.prompt("How many squares per side do you want? (Max 100)", "16"));
    checkGridLimit();
    recreateGrid();
    addHoverEffect();
}

//Create grid
function createGrid() {
    //Loop for vertical divs
    for (let k=0; k<nbSquares; k++) {
        const blockV = document.createElement('div');
        blockV.classList.add('blockV');
        container.appendChild(blockV);
        //Loop for horizontal divs
        for (let i=0; i<nbSquares; i++) {
            const blockO = document.createElement('div');
            blockO.classList.add('blockO');
            blockV.appendChild(blockO);
        }

    }
}

//Check if input for grid<100
function checkGridLimit() {
    if (nbSquares>100) {
    do {
        nbSquares = Number(window.prompt("That's too much! Try again! How many squares per side do you want? (Max 100)", "16"))
    }
    while (nbSquares>100);
    }
}

//Recreate grid after button input
function recreateGrid() {
    //Select container
    const container = document.querySelector('div.container');
    //Empty it
    container.replaceChildren();
    //Recreate grid
    createGrid();
}

//Change class when hovering
function addHoverEffect() {
    const divs = document.querySelectorAll('div.blockO');
    let clickEvent = () => {
        if (event.target.style.background === "") {
            event.target.style.background = getRandomRGB();
            event.target.style.filter = "brightness(100%)";
        } else {
            let brightness = event.target.style.filter;
            modifBright = Number(brightness.slice(11,-2));
            modifBright -= 10;
            event.target.style.filter = (`brightness(${modifBright}%`);
        }
    }
    divs.forEach((item) => {
        item.addEventListener('mouseenter', clickEvent)
    });
}

//Get a random color for hover
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getRandomRGB() {
    let x = getRandomInt(256);
    let y = getRandomInt(256);
    let z = getRandomInt(256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
}

//get width of container
const containerWidth = parseInt((window.getComputedStyle(document.querySelector('div.container')).getPropertyValue("width")),10);