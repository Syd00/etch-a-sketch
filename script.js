const grid = document.querySelector('#grid');

function createGrid(size=16) {
    for (let i = 0; i < (size*size); i++) {
        let square = document.createElement('div');
        let squareSize = document.querySelector('#grid').clientWidth / size;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('gridSquare');
        square.addEventListener('mousedown', setColor)
        square.addEventListener('mouseover', setColor)
        grid.appendChild(square);
    }
}
createGrid();

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let rainbow = false;
const rainbowBtn = document.querySelector('#randomColor');
rainbowBtn.addEventListener('click', () => {
    if (rainbow) {
        rainbow = false;
        rainbowBtn.style.backgroundColor = '';
    } else {
        rainbow = true;
        rainbowBtn.style.backgroundColor = 'green';
    }
})

function setColor(e) {
    if(e.type == 'mouseover' && !mouseDown) {
        return
    }
    if (rainbow) {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else {
        e.target.style.backgroundColor = `${document.querySelector('#color').value}`;
    }   
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