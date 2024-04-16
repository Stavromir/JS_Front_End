function focused() {
    const listItems = Array.from(document
        .getElementsByTagName('input'));

    for (const field of listItems) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(e) {
        const parentDivElement = e.currentTarget.parentElement;
        parentDivElement.className = 'focused';
    }

    function onBlur(e) {
        const parentDivElement = e.currentTarget.parentElement;
        parentDivElement.className = '';
    }
}