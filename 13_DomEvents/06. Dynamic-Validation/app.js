function validate() {
    const input = document
        .getElementById('email');

    input.addEventListener('change', onChange);

    function onChange(e) {
        const element = e.currentTarget;
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (!pattern.test(element.value)) {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    }
}