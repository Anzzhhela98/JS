function deleteByEmail() {
    const inputEmail = document.querySelector('input[name="email"]').value;
    const table = [...document.querySelectorAll('tbody tr')];
    const result = document.getElementById('result');

    let isDeleted = false;
    table.forEach((row) => {
        if (row.children[1].textContent === inputEmail) {
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.';
            isDeleted = true;
        };
    });

    if (!isDeleted) {
        result.textContent = 'Not found.';
    }

}