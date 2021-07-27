function calorieObject(array) {
    const products = {};

    for (let index = 0; index < array.length; index += 2) {
        let product = array[index];
        let calorie = array[index + 1];

        products[product] = Number(calorie);
    }

    return products;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))