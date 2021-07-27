function editElement(ref, match, repalcer) {
    const regExp = new RegExp(match, 'g');
    ref.textContent = ref.textContent.replace(regExp, repalcer);
    // TODO
}