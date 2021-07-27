function solve() {
    const container = document.getElementById('container');
    const btnnScreen = container.querySelector('button');
    btnnScreen.addEventListener('click', onScreen);
    const [name, hall, ticketPrice] = Array.from(container.querySelectorAll('input'));
    const movies = document.querySelector('section>ul');
    const archive = document.querySelector('#archive>ul');

    function onScreen(e) {
        e.preventDefault();
        let [valueName, valueHall, valueTicketPrice] = [name, hall, ticketPrice].map((el) => el.value)
        if (!isValid(valueName, valueHall, valueTicketPrice)) {
            return;
        }
        const li = createElement('li')
        const span = createElement('span', valueName);
        const strongHall = createElement('strong', `Hall: ${valueHall}`);
        const div = createElement('div');
        let strong = createElement('strong', Number(valueTicketPrice).toFixed(2))
        const inputHolder = createElement('input', undefined, 'Tickets Sold')
        const btnArchive = createElement('button', 'Archive');
        btnArchive.addEventListener('click', onArchive);

        [span, strongHall, div].forEach((el) => li.appendChild(el));
        [strong, inputHolder, btnArchive].forEach((el) => div.appendChild(el));
        movies.appendChild(li);
        [name, hall, ticketPrice].map((el) => el.value = '')


        function onArchive() {
            const soldTickets = inputHolder.value;
            if (typeof Number(soldTickets) != 'number' || Number(inputHolder.value) <= 0) {
                return
            }
            const totalAmount = Number(soldTickets) * valueTicketPrice;

            div.remove();
            const btnDelete = createElement('button', 'Delete');
            btnDelete.addEventListener('click', onDelete);
            strongHall.textContent = `Total amount: ${totalAmount.toFixed(2)}`
            li.appendChild(btnDelete);
            archive.appendChild(li);

        }

        function onDelete(e) {
            e.target.parentNode.remove()
        }

        const clearButton = document.querySelector('#archive > button');
        clearButton.addEventListener('click', (ev) => {
            const ul = ev.target.parentNode.querySelector('ul')
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            console.log(ul)
        });
    }

    function isValid(name, hall, ticketPrice) {
        if (name == '' || hall == '' || ticketPrice == '' ||
            isNaN(ticketPrice)) {
            return false;
        }
        return true;
    }

    function createElement(type, text, atribute) {
        const el = document.createElement(type);
        if (text) {
            el.textContent = text;
        }
        if (atribute) {
            el.setAttribute('placeholder', 'Tickets Sold');
        }
        return el;
    }
}