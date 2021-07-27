function listProcessor(input) {
    // Note: Need to be done using closure!

    const listCreator = () => {
        let list = [];
        return {
            add: (el) => {
                list.push(el);
            },
            remove: (el) => {
                list = list.filter((x) => x !== el);
            },
            print: () => {
                console.log(list.join(','));
            },
        };
    };

    const listHandler = listCreator();
    input
        .map((x) => x.split(' '))
        .map(([cmd, text]) => listHandler[cmd](text));
}

console.log(listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']));