function createGrid(rows, columns) {
    const mainContainer = document.querySelector('.mainContainer');

    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'gridRow';
        mainContainer.appendChild(rowDiv);
        for (let c = 0; c < columns; c++) {
            const columnDiv = document.createElement('div');
            columnDiv.className = 'gridBox';
            rowDiv.appendChild(columnDiv); 
        }
    }

    console.log(mainContainer);
}