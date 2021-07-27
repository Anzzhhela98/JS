function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = text.value
    option.value = value.value;

    menu.appendChild(option);
    text.value = '';
    value.value = '';
}