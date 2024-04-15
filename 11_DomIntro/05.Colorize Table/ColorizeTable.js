function colorize() {
    const tableRows = document.getElementsByTagName('tr');

    for (let i = 1; i <= tableRows.length; i++) {
        if (i % 2 === 0) {
            tableRows[i - 1].style.background = 'Teal';
        }
    }
}