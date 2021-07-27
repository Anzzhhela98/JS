    function smallestNumbers(array = []) {
        return array
            .sort((x, y) => x - y)
            .splice(0, 2)
            .join(' ');

    }

    console.log(smallestNumbers([30, 15, 50, 5]))