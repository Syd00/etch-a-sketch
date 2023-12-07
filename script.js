const grid = document.querySelector('#grid');

function createGrid(size=16) {
    //let size = document.querySelector('#myRange').value;
    //let grid = document.querySelector('#grid');
    

    for (let i = 0; i < (size*size); i++) {
        let square = document.createElement('div');
        let squareSize = document.querySelector('#grid').clientWidth / size;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add ('gridSquare');
        grid.appendChild(square);
    }
}
createGrid();

slider = document.querySelector('#myRange');
slider.addEventListener('input', () => {
    let child = grid.lastElementChild;
    while(child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
    size = slider.value;
    sizePara = document.querySelector('#sizePara');
    sizePara.innerText = `${size}x${size}`;
    createGrid(size);
});