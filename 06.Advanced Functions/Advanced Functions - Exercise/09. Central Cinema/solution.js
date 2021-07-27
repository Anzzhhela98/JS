function solve() {
    const movieList = document.querySelector('#movies > ul');
    const arhiveList = document.querySelector('#archive > ul');
    const onScreenButton = document.querySelector('#container > button');

    onScreenButton.addEventListener('click', addMovie);

    function addMovie(ev) {
        const [name, hall, price] = [
            ...document.querySelectorAll('#container  > input')
        ].map((el) => el.value);
        ev.preventDefault();

        if (isValid(name, hall, price)) {
            createLi(name, hall, price);
            clearInput();
        } else return
    };

    function createLi(name, hall, price) {
        const li = createElement('li', null, null);
        const span = createElement('span', name, null);
        const strong = createElement('strong', `Hall: ${hall}`, null);
        const div = createElement('div', null, null);

        [span, strong, div].forEach((el) => {
            li.appendChild(el);
        });

        const strongDiv = createElement('strong', Number(price).toFixed(2), null);
        const inputDiv = createElement('input', null, [
            'placeholder',
            'Tickets Sold'
        ]);
        const buttonDiv = createElement('button', 'Archive', null);
        buttonDiv.addEventListener('click', archiveMovie);

        [strongDiv, inputDiv, buttonDiv].forEach((el) => {
            div.appendChild(el);
        });
        //Append in ul
        movieList.appendChild(li);

        function archiveMovie() {
            const soldTickets = inputDiv.value;
            const totalBill = price * Number(soldTickets);

            if (typeof Number(soldTickets) == 'number' && Number(soldTickets) > 0) {
                li.removeChild(div);
                li.children[1].textContent = `Total amount: ${totalBill.toFixed(2)}`;

                const deleteBtn = createElement('button', 'Delete', null)
                li.appendChild(deleteBtn);
                arhiveList.appendChild(li);
                deleteBtn.addEventListener('click', (ev) => {
                    ev.target.parentNode.remove();
                });
            }

            const clearButton = document.querySelector('#archive > button');
            clearButton.addEventListener('click', (ev) => {
                ev.target.parentNode.querySelector('ul>li').remove();
            });
        }
    }

    function createElement(type, content, attribute) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('placeholder', 'Tickets Sold');
        } else {
            el.textContent = content;
        }
        return el;
    }

    function isValid(name, hall, price) {
        return name != '' &&
            hall != '' &&
            typeof Number(price) == 'number' &&
            Number(price) > 0 ? true : false
    }

    function clearInput() {
        [...document.querySelectorAll('#container  > input')]
        .map((el) => el.value = '');
    }
}