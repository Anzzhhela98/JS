function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units
        }

        get area() {
            return null;
        }

        changeUnits(unit) {
            this.units = unit;
        }

        metricConvert(number) {
            if (this.units == 'mm') {
                return number *= 10
            } else if (this.units == 'm') {
                return number /= 10
            }
            return number
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }
    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius() {
            return this.metricConvert(this._radius)
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get width() {
            return this.metricConvert(this._width)
        }

        get height() {
            return this.metricConvert(this._height)
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle }
}