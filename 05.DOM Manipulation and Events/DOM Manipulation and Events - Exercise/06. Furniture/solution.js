function solve() {
    const [generateBtn, buyBtn] = document.querySelectorAll('button');
    const [input, output] = document.querySelectorAll('textarea');
    const body = document.querySelector('tbody');

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate() {
        const products = JSON.parse(input.value);
        input.value = '';

        for (const product of products) {
            const row = document.createElement('tr');
            //img
            const tdImage = createElement('img', ' ', ['src', product.img]);
            //name
            const tdName = createElement('p', product.name);
            //price
            const tdPrice = createElement('p', product.price);
            //decFactor
            const tdFactory = createElement('p', product.decFactor);
            //checkbox
            const tdCheck = createElement('input', ' ', ['type', 'checkbox']);
            //append data in row
            row.appendChild(tdImage);
            row.appendChild(tdName);
            row.appendChild(tdPrice);
            row.appendChild(tdFactory);
            row.appendChild(tdCheck);
            //append in tbody
            body.appendChild(row);
        }

        function createElement(type, textContent, attribute) {
            const td = document.createElement('td');
            const content = document.createElement(type);
            if (attribute) {
                content.setAttribute(attribute[0], attribute[1]);
            }
            content.textContent = textContent;
            td.appendChild(content);

            return td;
        }
    };

    function buy() {
        const chekedProduct = Array.from(document.querySelectorAll("input[type='checkbox']"));
        const bought = { furniture: [], bill: 0, decFactor: 0 };

        chekedProduct.forEach((box) => {
            if (box.checked) {
                const productName = box.parentNode.parentNode.children[1].textContent;
                const price = Number(box.parentNode.parentNode.children[2].textContent);
                const decFactor = Number(box.parentNode.parentNode.children[3].textContent);

                bought.furniture.push(productName);
                bought.bill += price;
                bought.decFactor += decFactor;
            }
        });

        output.value = `Bought furniture: ${bought.furniture.join(', ')}\nTotal price: ${bought.bill.toFixed(2)}\nAverage decoration factor: ${bought.decFactor/bought.furniture.length}`;
    };
}