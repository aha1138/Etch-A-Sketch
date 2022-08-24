
function createGrid(size) {
    let grid = document.querySelector(".grid");
    let units = grid.querySelectorAll("div");
    units.forEach(div => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i = 0; i < size * size; i++) {
        let unit = document.createElement("div");
        unit.style.backgroundColor = 'blue';
        grid.insertAdjacentElement("beforeend", unit);
    }
}
createGrid(16);

function changeSize(value){
    createGrid(value);
}



  