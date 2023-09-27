const nbSquares = 16;

function createGrid() {
    //Select container
    const container = document.querySelector('div.container');

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

createGrid();

//get width of container
const containerWidth = parseInt((window.getComputedStyle(document.querySelector('div.container')).getPropertyValue("width")),10);


