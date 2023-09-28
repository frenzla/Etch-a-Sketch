let nbSquares = 16;

//Select container
const container = document.querySelector('div.container');

createGrid();
addHoverEffect();

//Add button behavior
const button = document.querySelector('.btn');
button.addEventListener('click', inputNbSquares);

function inputNbSquares (e) {
    nbSquares = Number(window.prompt("How many squares per side do you want?", "16"));
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
        const classes = event.target.classList;
        classes.add("divHover");
    }
    divs.forEach((item) => {
        item.addEventListener('mouseenter', clickEvent)
    });
}

//get width of container
const containerWidth = parseInt((window.getComputedStyle(document.querySelector('div.container')).getPropertyValue("width")),10);


