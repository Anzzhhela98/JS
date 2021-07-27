function heroic(collection) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        let [name, stringLevel, itemsString] = collection[i].split(' / ');
        let items = itemsString ? itemsString.split(', ') : [];
        let level = Number(stringLevel);
        result.push({ name, level, items });
    }

    return JSON.stringify(result);

}

console.log(heroic(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
))