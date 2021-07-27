function solution() {
    const [addGifts, listOfGifts, SentGifts, DiscardedGifts] =
    Array.from(document.querySelectorAll('section>:nth-child(2)'));
    let giftName = addGifts.querySelector('input');
    let btnAddGift = addGifts.querySelector('button');
    btnAddGift.addEventListener('click', addGift);

    function addGift(e) {
        e.preventDefault();

        const li = createElement('li', giftName.value);
        li.className = 'gift';
        const btnDiscard = createElement('button', 'Discard', 'sendButton');
        btnDiscard.addEventListener('click', sendOrDiscard);
        const btnSend = createElement('button', 'Send', 'discardButton');
        btnSend.addEventListener('click', sendOrDiscard);
        [btnSend, btnDiscard].forEach((b) => li.appendChild(b));
        listOfGifts.appendChild(li);
        Array.from(listOfGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => listOfGifts.appendChild(li))
        giftName.value = '';
    }

    function sendOrDiscard(e) {
        const li = e.target.parentNode;
        li.removeChild(li.childNodes[1])
        li.removeChild(li.childNodes[1])

        if (e.currentTarget.textContent == 'Send') {
            SentGifts.appendChild(li);
        } else {
            DiscardedGifts.appendChild(li)
        }
    }

    function createElement(type, content, attribute, ) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('id', attribute);
        }
        if (content) {
            el.textContent = content;
        }
        return el;
    }

}