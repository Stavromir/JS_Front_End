function deleteByEmail() {
    let input = document
        .querySelector("input[name='email']");

    let rows = document
        .querySelectorAll("tbody tr");

    let isRemoved = false;

    for (let row of rows) {
        if (row.innerHTML.includes(input.value)) {
            row.remove();
            isRemoved = true;
        }
    }

    let resultField = document
        .getElementById('result');

    if (isRemoved) {
        resultField.textContent = 'Deleted'
        input.value = "";
    } else {
        resultField.textContent = 'Not found.'
    }
}