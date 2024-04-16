function encodeAndDecodeMessages() {

    const textElements = document
        .querySelectorAll('textarea');
    const encodeButtonElements = document
        .querySelectorAll('button');

    const inputTextElement = textElements[0];
    const outputTextElement = textElements[1];

    const encodeButton = encodeButtonElements[0];
    const decodeButton = encodeButtonElements[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);
    function encodeMessage() {
        let textToEncode = inputTextElement.value;

        let encodeMessage = '';
        for (const letter of textToEncode) {
            encodeMessage += String.fromCharCode(letter.charCodeAt() + 1);
        }
        outputTextElement.value = encodeMessage;
        inputTextElement.value = '';

        decodeButton.disabled = false;
    }

    function decodeMessage() {
        let textToDecode = outputTextElement.value;

        let decodeMessage = '';
        for (const letter of textToDecode) {
            decodeMessage += String.fromCharCode(letter.charCodeAt() - 1);
        }
        outputTextElement.value = decodeMessage;

        decodeButton.disabled = true;
    }
}