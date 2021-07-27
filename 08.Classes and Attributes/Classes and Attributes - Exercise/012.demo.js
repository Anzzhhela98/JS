const myObj = {
    name: "Anzhela"
}

// console.log(
//     Object.getOwnPropertyDescriptor(myObj, 'name'));


Object.defineProperty(myObj, 'lastname', {
    value: "GEno",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(myObj, 'lastname'))
myObj.lastname = 'GIGI'
console.log(myObj.lastname)
for (const key in myObj) {
    console.log(key)
}