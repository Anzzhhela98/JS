function solve() {
    const text = document.getElementById('input')
        .value.split('.')
        .filter((el));
    const appendTo = document.getElementById('output');

    createParagraphs(text);

    function createParagraphs(text) {
        const paragraph = [];
        while (text.length > 0) {
            paragraph.push(text.splice(0, 3).join('.') + '.');
            console.log(paragraph.length);
        }
        paragraph.forEach((pa) => (appendTo.innerHTML += `<p>${pa}</p>`));
    }
}