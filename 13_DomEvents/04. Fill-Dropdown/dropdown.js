function addItem() {
    const inputText = document
        .getElementById('newItemText');
    const inputValue = document
        .getElementById('newItemValue');

    const newElement = document
        .createElement('option');
    newElement.textContent = inputText.value;
    newElement.value = inputValue.value;

    if (inputText.value !== '' && inputValue.value !== '') {
        document.getElementById('menu')
            .appendChild(newElement);

        inputText.value = '';
        inputValue.value = '';
    }
}