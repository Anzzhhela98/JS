function addItem() {
    const liElemnt = document.createElement('li');
    liElemnt.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(liElemnt);
     document.getElementById('newItemText').value=' ';
}