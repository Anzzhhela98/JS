function addItem() {
    // Create <li>
    const input = document.getElementById('newText'); //=>'newItemText'
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    //Delete link
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#'; //=> make a hyper link;
    
    deleteBtn.addEventListener('click', (event) => {
        event.target.parentNode.remove();
    });
    
    liElement.appendChild(deleteBtn);

    //Append final <li> and clear the input ;
    document.getElementById('items').appendChild(liElement);
    input.value = '';
}