function editElement(ref, matcher, replacer) {
    const content = ref.textContent;
    const editedText = content
        .replace(new RegExp(matcher, 'g'), replacer);

    ref.textContent = editedText;
}