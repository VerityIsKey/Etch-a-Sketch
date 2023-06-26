const gridContainer = document.querySelector('.gridContainer');

let gridSize = 16;

let squareSize = 960 / gridSize;


for(let i = 0; i < gridSize; i++){
    const i = document.createElement('div');
    i.classList.add('parentSquares');

 

    gridContainer.appendChild(i);
    
    for(let x = 0; x < gridSize; x++){
        const x = document.createElement('div');
        x.classList.add('gridSquare');
        //x.style.backgroundColor = backgroundColor;
        x.style.minHeight = `${squareSize}px`;
        x.style.minWidth = `${squareSize}px`;
        
        i.appendChild(x);

    }
}