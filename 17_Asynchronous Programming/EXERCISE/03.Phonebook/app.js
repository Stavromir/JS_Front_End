function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const [loadButton, createButton] = document.getElementsByTagName("button");
    const phoneBookList = document.getElementById('phonebook');
    loadButton.addEventListener('click', loadPhonebook);
    createButton.addEventListener('click', addNewEntity)

    let phoneBook = {};

    function addNewEntity(e) {
        e.preventDefault();
        const [nameInput, phoneInput] = document.getElementsByTagName('input');

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({
                person: nameInput.value,
                phone: phoneInput.value,
            })
        })
            .then(() => {
                nameInput.value = '';
                phoneInput.value = '';
                loadPhonebook();
            })
            .catch(err => console.log(err));
    }

    function loadPhonebook() {

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                phoneBook = data;
                showPhoneBook(phoneBook);
            })
            .catch(err => console.log(err));
    }

    function showPhoneBook(phoneBook) {
        phoneBookList.innerHTML = "";

        Object.values(phoneBook).forEach(value => {
            let li = document.createElement('li');
            li.innerText = `${value.person}: ${value.phone}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.id = value._id;
            deleteBtn.innerText = 'Delete';
            deleteBtn.addEventListener('click', deleteEntity);

            li.appendChild(deleteBtn);
            phoneBookList.appendChild(li);
        })
    }

    function deleteEntity(e) {
        const entityId = e.currentTarget.id;

        fetch(baseUrl + '/' + entityId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .catch(err => console.log(err));

        entityId.parentNode.remove();
    }
}

attachEvents();