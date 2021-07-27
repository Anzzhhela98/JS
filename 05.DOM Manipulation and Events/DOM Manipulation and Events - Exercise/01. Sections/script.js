function create(words) {
    const content = document.getElementById('content');

    words.forEach(section => {
        const div = document.createElement('div');
        const p = document.createElement('p');

        p.textContent = section;
        p.style.display = 'none';
        div.appendChild(p);
        content.appendChild(div);
        div.addEventListener('click', function(ev) {
            ev.target.children[0].style.display = 'block';
        })
    });
}