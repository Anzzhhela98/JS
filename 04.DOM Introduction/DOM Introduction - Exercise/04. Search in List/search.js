function search() {
    const allTowns = document.querySelectorAll('#towns>li');
    const input = document.querySelector('input').value;
    const result = document.getElementById('result');

    let count = 0;
    for (const town of allTowns) {
        if (town.textContent.toLowerCase().includes(input.toLowerCase())) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            count++;
        } else {
            town.style.fontWeight = '';
            town.style.textDecoration = '';
        }
    }

    result.textContent = `${count} matches found`;
}