function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => button
        .addEventListener('click', onShowMore));

    function onShowMore(ev) {
        const lock = ev.target.parentNode.children[2].checked;
        const hiddenText = ev.target.parentNode.children[9];

        if (lock) {
            const isHidden = ev.target.textContent === 'Show more';
            hiddenText.style.display = isHidden ? 'block' : 'none';
            ev.target.textContent = isHidden ? 'Hide it' : 'Show more';
        };
    };
}