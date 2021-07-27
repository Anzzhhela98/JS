function focused() {
    const elements = Array.from(document.querySelectorAll('input'));

    for (let element of elements) {
        element.addEventListener('focus',onFocus);
        element.addEventListener('blur', onBlur);
    }

    function onFocus(event){
        event.target.parentNode.className = 'focused';

    }

    function onBlur(event){
        event.target.parentNode.className = ' ';
        
    }
}