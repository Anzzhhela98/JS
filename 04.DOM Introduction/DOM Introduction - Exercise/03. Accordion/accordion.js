function toggle() {
    const text = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];

    const isHidden = button.textContent === 'More';
    text.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Less' : 'More';
}