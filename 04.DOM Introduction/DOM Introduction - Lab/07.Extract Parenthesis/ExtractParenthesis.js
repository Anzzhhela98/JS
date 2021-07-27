function extract(id) {
    let result = [];
    const text = document.getElementById(id).textContent;
    const regExp = new RegExp(/\((.+?)\)/, 'g');
    let match = regExp.exec(text);

    while (match) {
        result.push(match[1]);
        match = regExp.exec(text);
    }

    return result.join('; ')
}