function townsToJSON(input) {
    let [colums, ...table] = input.map(splitLine);

    function splitLine(input) {
        return input
            .split('|')
            .filter(isEmptyString)
            .map(x => x.trim())
            .map(convertIfNum);
    }

    function convertIfNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2))
    }

    function isEmptyString(x) {
        return x !== "";
    }

    return JSON.stringify(table.map(entry => {
        return colums.reduce((acc, cur, index) => {
            acc[cur] = entry[index];
            return acc;
        }, {})
    }))

}

console.log(townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]))