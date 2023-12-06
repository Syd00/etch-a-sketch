function createGrid() {
    let size = 16;
    let grid = document.querySelector('#grid');
    

    for (let i = 0; i < (size*size); i++) {
        let square = document.createElement('div');
        let squareSize = document.querySelector('#grid').clientWidth / size;
        square.style.width = squareSize-1 + 'px';
        square.style.height = squareSize-1 + 'px';
        square.classList.add ('gridSquare');
        grid.appendChild(square);
    }
}
createGrid();