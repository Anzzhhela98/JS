function solve(arr, a, b) {
    return arr.slice(arr.indexOf(a), arr.indexOf(b));
}

console.log(solve(['Pumpkin Pie',

        'Key Lime Pie',

        'Cherry Pie',

        'Lemon Meringue Pie',

        'Sugar Cream Pie'
    ],

    'Key Lime Pie',

    'Lemon Meringue Pie'))