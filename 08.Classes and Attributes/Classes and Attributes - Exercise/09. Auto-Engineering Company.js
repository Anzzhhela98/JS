function solve(array) {

    const vehicles = array.reduce((acc, value) => {
        let [brand, model, produced] = value.split(' | ');
        produced = Number(produced);

        if (acc[brand]) {
            if (acc[brand][model]) {
                acc[brand][model] += produced;
            } else {
                acc[brand][model] = produced;
            }
        } else {
            acc[brand] = {
                [model]: produced,
            };
        }
        return acc;
    }, {});

    Object.entries(vehicles).forEach((brand) => {
                const [brandType, ObjectData] = brand;
                console.log(`${brandType}\n${Object.entries(ObjectData).reduce((acc,value)=>{
            const [model, quantity]=value;
            acc.push(`###${model} -> ${quantity}`);
            return acc;
        },[])
    .join('\n')}`
    );
    });
};



console.log(solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]));