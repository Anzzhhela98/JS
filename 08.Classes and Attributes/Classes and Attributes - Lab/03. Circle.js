class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // the setter needs to calculate the radius and change it.
    //the getter needs to use the radius to calculate the diameter and return it.
    // getter  area(), which calculates and returns its area. 

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }
    
    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);