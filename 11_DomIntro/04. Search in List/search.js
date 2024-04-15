function search() {
   let listItems = document
       .getElementById('towns').children;

   let searchInput = document
       .getElementById('searchText').value;

   let searchResult = document
       .getElementById('result');

   let searchMatchCount = 0;

    for (let li  of Array.from(listItems)) {
        li.style.fontWeight = '';
        li.style.textDecoration = '';

        if (li.textContent.includes(searchInput) && searchInput.length !== 0) {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            searchMatchCount ++;
        }
    }

    searchResult.textContent = `${searchMatchCount} matches found`
}
