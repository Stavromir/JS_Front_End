function toggle() {
    const button = document.querySelector('.button');
    const text = document.getElementById('extra');

    let buttonLabel = button.textContent;

    if (buttonLabel === "MORE") {
        text.style.display = 'block';
        button.textContent = 'LESS';
    } else {
        text.style.display = 'none';
        button.textContent = 'MORE';
    }
}