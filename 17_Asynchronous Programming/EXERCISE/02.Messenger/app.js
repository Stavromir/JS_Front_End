function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const [authorInput, contentInput, sendButton, refreshButton] = document.getElementsByTagName("input");
    const textArea = document.getElementById('messages');

    sendButton.addEventListener('click', postNewMassage);
    refreshButton.addEventListener('click', showAllMassages);

    function postNewMassage(e) {
        e.preventDefault();

        let requestBody = {
            author: authorInput.value,
            content: contentInput.value,
        }

        const isFilled = authorInput.value !== "" && contentInput.value !== "";

        if (isFilled) {
            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            })
                .catch(err => console.log(err));
        }
    }

    function showAllMassages(e) {
        e.preventDefault();

        const allMassages = [];

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(message => {
                        allMassages.push(`${message.author}: ${message.content}`);
                    });
                textArea.textContent = allMassages.join('\n');
            })
            .catch(err => console.log(err));
    }

}

attachEvents();