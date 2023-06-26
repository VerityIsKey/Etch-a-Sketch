const gridContainer = document.querySelector('.gridContainer');
const btn = document.querySelector('.btn');
let gridSize = 16;
createGrid(gridSize);
drawOnGrid();





function createGrid(gridSize){
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
}

function removeCurrentGrid(){
    const parentSquares = document.querySelectorAll('.parentSquares');
    
    parentSquares.forEach(function(parentSquare){
        parentSquare.remove();
    });
}

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';


}

function drawOnGrid(){
    const gridSquares = document.querySelectorAll('.gridSquare');

    gridSquares.forEach(function(gridSquare){
        gridSquare.addEventListener('mouseover',function(){
            gridSquare.style.backgroundColor = randomRgbColor();
        })
    })
}

function promptGrid(gridSize){
    gridSize = parseInt(prompt("Enter the grid size"));
    removeCurrentGrid();
    createGrid(gridSize);
    drawOnGrid();
}

btn.addEventListener('click', promptGrid);



