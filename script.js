let size = 16;

const sketchPad = document.querySelector('.sketchpad');
const sizeSelection = document.querySelector('.size');
const resize = document.querySelector('.set');
const clear = document.querySelector('.clear');

function colorChange(e) {
    box = e.target;
    box.classList.add('drawn');
}

function resizeGrid() {
    size = sizeSelection.value;
    while (size >= 80) {
        let askSize = prompt('Please select a number less than 80.');
        size = askSize;
    }
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.lastChild);
    }
    height = (1000-(size-1))/size + 'px';
    width = (1000-(size-1))/size + 'px';
    totalBoxes = size*size;
    for (i = 0; i <= totalBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('gridBox');
        box.style.height = height;
        box.style.width = width;
        sketchPad.appendChild(box);
        box.addEventListener('mouseover', colorChange)
    }
};

function clearGrid() {
    boxs = document.querySelectorAll('.gridBox');
    boxs.forEach(box => box.classList.remove('drawn'));
}

resize.addEventListener('click', resizeGrid);
clear.addEventListener('click', clearGrid);