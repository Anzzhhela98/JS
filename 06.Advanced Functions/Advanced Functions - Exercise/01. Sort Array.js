function sort(array, argument) {
    const sort = {
        asc: (array) => array.sort((a, b) => a - b),
        desc: (array) => array.sort((a, b) => b - a)
    };

    return sort[argument](array);
}

