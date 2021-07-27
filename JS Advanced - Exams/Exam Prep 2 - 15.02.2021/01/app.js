function solution() {
    [addSection, listSection, sentSection, discardedSection] = Array.from(
        document.querySelectorAll('section'));

    // Add gifts
    const button = addSection.querySelector('button');
    const giftName = addSection.querySelector('input');
    button.addEventListener('click', addCLick);

    function addCLick(e) {
        e.preventDefault();

        const sendBtn = createElement('button', "Send", undefined, "sendButton");
        sendBtn.addEventListener('click', sendOrDiscard);
        const discarddBtn = createElement('button', "Discard", undefined, "discardButton");
        discarddBtn.addEventListener('click', sendOrDiscard);

        const li = createElement('li', giftName.value, "gift");
        [sendBtn, discarddBtn].forEach((el) => li.appendChild(el));
        ulGifts.appendChild(li);
        Array.from(ulGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => ulGifts.appendChild(li));

        giftName.value = '';
    }

    //List of Gifts
    const ulGifts = listSection.querySelector('ul');

    function sendOrDiscard(e) {
        const li = e.target.parentNode
        li.removeChild(li.childNodes[1])
        li.removeChild(li.childNodes[1])

        if (e.currentTarget.textContent == 'Send') {
            ulSent.appendChild(li);
        } else {
            ulDiscard.appendChild(li);
        }
    }

    // Sent gifts
    const ulSent = sentSection.querySelector('ul');
    // Discarded gifts
    const ulDiscard = discardedSection.querySelector('ul');

    function createElement(type, text, atributte, id) {
        const el = document.createElement(type);
        if (text) {
            el.textContent = text;
        }
        if (atributte) {
            el.className = atributte;
        }
        if (id) {
            el.id = id;
        }
        return el;
    }
}