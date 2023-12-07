const grid = document.querySelector('#grid');


function createGrid(size=16) {
    for (let i = 0; i < (size*size); i++) {
        let square = document.createElement('div');
        let squareSize = document.querySelector('#grid').clientWidth / size;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('gridSquare');
        square.addEventListener('mousedown', setColor)
        grid.appendChild(square);
    }
}
createGrid();

let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

function setColor() {
    let color = document.querySelector('#color').value;
    document.querySelectorAll('.gridSquare').forEach(square => {
        square.addEventListener('mouseover', (e) => {
            if(isMouseDown) {
                e.target.style.backgroundColor = `${color}`;
            }
        })
    })
}

const slider = document.querySelector('#myRange');
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