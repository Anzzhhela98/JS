function solve() {
    const text = document.getElementById('text').value.split(' ');
    const type = document.getElementById('naming-convention').value;
    const finalResult = document.getElementById('result');
    finalResult.textContent = convert(text, type);

    function convert(text, type) {
        switch (type) {
            case 'Camel Case':
                return text
                    .map((el) => el.toLowerCase())
                    .reduce((a, c, i) => {
                        i === 0 ? c : (c = c[0].toUpperCase() + c.slice(1));
                        return a + c;
                    }, '');
            case 'Pascal Case':
                return text
                    .map((el) => el.toLowerCase())
                    .reduce((a, c) => {
                        return a + (c[0].toUpperCase() + c.slice(1));
                    }, '');
            default:
                return 'Error!';
        }
    }
}