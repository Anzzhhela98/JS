function solve(n, k) {
    let array = [];
    array[0] = 1;

    for (var i = 1; i < n; i++) {
        for (var b = 0; b < array.length; b++) {

            array[i] += array[b];
        }
    }
}