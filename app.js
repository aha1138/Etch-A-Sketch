function createGrid(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i = 0; i < 256; i++) {
        let unit = document.createElement("div");
        unit.style.backgroundColor = 'blue';
        grid.insertAdjacentElement("beforeend", unit);
    }
}
createGrid(16);



  