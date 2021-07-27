function generateReport() {
    const textArea = document.getElementById('output');
    const checkedBox = [...document.querySelectorAll('thead th input')];
    const rows = [...document.querySelectorAll('tbody tr')];
    const headers = document.querySelectorAll('thead th')

    let indexes = [];
    let result = [];
    checkedBox.forEach((b, index) => {
        if (b.checked == true) {

            indexes.push(index);
        }
    });

    for (const row of rows) {
        let object = {};
        for (const index of indexes) {
            const value = row.children[index].textContent;
            const title = headers[index].textContent.toLowerCase().trim();

            object[title] = value;
        }
        result.push(object);
    }

    textArea.value=JSON.stringify(result, null, 1);
}