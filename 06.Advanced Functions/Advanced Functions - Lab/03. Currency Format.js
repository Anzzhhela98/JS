function createFormatter(a, b, c, currencyFormatter) {
    return currencyFormatter.bind(null, a, b, c);
}

const dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

console.log(dollarFormatter(5345)); 