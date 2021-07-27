class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        if (!(p1 instanceof Point) || !(p2 instanceof Point)) {
            throw new TypeError('Wrong parameters, must be of type Point');
        }

        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y)**2);
    }
}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));