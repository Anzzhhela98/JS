function sumTable() {
    const price = [...document.querySelectorAll('table tr')]
        .slice(1, -1)
        .map((el) => el.children[1].textContent);

    const bill = price.reduce((a, c) => a + Number(c), 0);
    document.getElementById('sum').textContent = bill;
}