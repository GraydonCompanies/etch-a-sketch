function createGrid(rows, columns) {

    //Check that input does not exceed 100 rows or columns
    if (rows > 100 || columns > 100) {
        return 'Please enter a parameter from 1 to 100';
    }

    //Create a reference to the mainContainer node
    const mainContainer = document.querySelector('.mainContainer');

    //Create the row/column structure
    for (let r = 0; r < rows; r++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        mainContainer.appendChild(gridRow);
        for (let c = 0; c < columns; c++) {
            const gridColumn = document.createElement('div');
            gridColumn.className = 'gridColumn';
            gridRow.appendChild(gridColumn);
        }
    }
}

function destroyGrid() {

    //Create a reference to the mainContainer and all gridRow nodes
    const mainContainer = document.querySelector('.mainContainer');
    const gridRows = document.querySelectorAll('.gridRow');

    //Destroy the rows
    for (gridRow of gridRows) {
        mainContainer.removeChild(gridRow);
    }
}