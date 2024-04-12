function extractText() {

    // const items = document.getElementById('items').children;
    // const items = document.getElementsByTagName('li');

    const items = document.querySelectorAll('#items li');
    const textArea = document.getElementById('result');

    // for (const item of Array.from(items)) {
    //     textArea.textContent += String(`${item.textContent}\n`);
    // }

    textArea.textContent = Array.from(items).map(item => item.textContent).join("\n");
}

