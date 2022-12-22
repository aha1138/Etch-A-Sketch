var color;
var slider = document.querySelector('#slider')
const buttons = document.querySelectorAll('.buttons')
const grid = document.querySelector('.grid')


buttons.forEach(button => button.addEventListener('click', changeColor));

function createGrid(size) {

    for (let i = 1; i <= size * size; i++) {
        let gridUnit= document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridUnit);
    } 
    var gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));

}
createGrid(16);


function changeSize(value){
    createGrid(slider.value);
}
function colorGrid(){
    switch (color){
        case 'black':
            this.style.backgroundColor = '#000000';
            break;

        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            break;

                }

            }

// parkercon  rlmoser99
       
function changeColor(e) {
    switch (e.target.dataset.color){
        case 'black': 
            color = 'black';
            break;

        case 'eraser':
            color = 'white';
            break; 

        case 'rainbow':
            color = 'rainbow';
            break;

        
    }

}