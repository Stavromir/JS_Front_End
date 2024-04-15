function solve() {
    document.querySelector('#searchBtn')
        .addEventListener('click', onClick);

    function onClick() {

        let itemsList = document.querySelectorAll('tbody tr');

        let searchInput = document.querySelector('#searchField').value;


        for (const tr of itemsList) {
           tr.className = "";

            if (tr.innerHTML.includes(searchInput) && searchInput.length !== 0) {
                tr.className = "select";
            }
        }

        document.querySelector('#searchField').value = "";
    }
}