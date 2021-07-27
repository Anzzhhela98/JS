function solve() {
    const output = document.querySelector('textarea');

    const cart = [];

    document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
        if (ev.target.tagName === 'BUTTON' && ev.target.className === 'add-product') {
            const product = ev.target.parentNode.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

            cart.push({ name, price });
        };
    });

    //Add EventListener to the Ckeckout=>Button

    document.querySelector('.checkout').addEventListener('click', () => {
        const result = cart.reduce((acc, product) => {
            acc.products.push(product.name);
            acc.bill += product.price;
            return acc;
        }, { products: [], bill: 0 });

        [...document.getElementsByTagName('button')].forEach((el) =>
            el.setAttribute('disabled', ''));

        output.value += `You bought ${Array.from(new Set(result.products)).join(', ')} for ${result.bill.toFixed(2)}.`;
    });
}