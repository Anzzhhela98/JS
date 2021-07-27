function solve() {
    //Add Book select all neede elements
    const addBtn = document.querySelector('form>button');
    addBtn.addEventListener('click', addBook);
    const [oldBook, newBook] = Array.from(document.querySelectorAll('div>section'));
    let totalProfit = document.querySelectorAll('h1')[1];
    let cost = 0;

    function addBook(e) {
        e.preventDefault();
        let [Inputtitle, Inputyear, Inputprice] = Array.from(document.querySelectorAll('form>input'));
        let [currTittle, currYear, currPrice] = [Inputtitle, Inputyear, Inputprice].map((el) => el.value);
        let price = Number(currPrice);
        let year = Number(currYear);
        if (year <= 0 || price <= 0 || currTittle == "") {
            return
        }

        const oldBookShelf = oldBook.querySelector('div');
        const newBookShelf = newBook.querySelector('div');

        const div = createElement('div', undefined, 'book');
        const p = createElement('p', `${currTittle} [${currYear}]`);
        const btnBuy = createElement('button', `Buy it only for ${price.toFixed(2)} BGN`);
        btnBuy.addEventListener('click', onClick);
        const btnOldSection = createElement('button', 'Move to old section');
        btnOldSection.addEventListener('click', onClick);

        [p, btnBuy, btnOldSection].forEach((el) => div.appendChild(el))
        if (year >= 2000) {
            newBookShelf.appendChild(div);
        } else {
            btnOldSection.remove();
            price -= price * 0.15;
            btnBuy.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            oldBookShelf.appendChild(div);
        }

        [Inputtitle, Inputyear, Inputprice] = [Inputtitle, Inputyear, Inputprice].map((el) => el.value = '');

        function onClick(e) {
            if (e.currentTarget.textContent == 'Move to old section') {
                price -= price * 0.15;
                btnBuy.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
                btnOldSection.remove();
                oldBookShelf.appendChild(div);

            } else {
                div.remove();
                cost += price;
                totalProfit.textContent = `Total Store Profit: ${cost.toFixed(2)} BGN`;
            }
        }
    }

    function createElement(type, text, atributte) {
        const el = document.createElement(type);
        if (text) {
            el.textContent = text;
        }
        if (atributte) {
            el.className = atributte;
        }

        return el;
    }
}