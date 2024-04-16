function generateReport() {

    let personAllObjects = [];
    let columnSetNumbers = [];
    let columnsAll = document
        .querySelectorAll('thead tr th input');

    let outputArea = document
        .getElementById('output');

    for (let i = 0; i < columnsAll.length; i++) {

        let checkBox = columnsAll[i].checked;
        if (checkBox) {
            columnSetNumbers.push(i);
        }
    }
    let rows = document
        .querySelectorAll('tbody tr');

    for (let i = 0; i < rows.length; i++) {
        let personObject = {};
        columnSetNumbers.forEach(colNum => {
            let key = columnsAll[colNum].parentElement.textContent;
            let value = Array.from(rows[i].children)[colNum].textContent;
            console.log(key);
            console.log(value);
            personObject[key] = value;
        });
        personAllObjects.push(personObject);
    }
    outputArea.textContent = JSON.stringify(personAllObjects);
}
