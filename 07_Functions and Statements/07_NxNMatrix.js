function createMatrix(rowColNum) {

    const printCol = (rowColNum) => {
        let row = [];
        for (let i = 0; i < rowColNum; i++) {
            row.push(rowColNum);
        }
        return row.join(" ");
    }

    const  printRow = (rowColNum) => {
        for (let i = 0; i <rowColNum; i++) {
            console.log(printCol(rowColNum));
        }
    }

    printRow(rowColNum);
}

createMatrix(3);
createMatrix(7);