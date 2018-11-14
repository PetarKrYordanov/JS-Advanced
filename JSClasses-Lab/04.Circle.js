class Circle {
    constructor(radius) {
        this.radius = radius;
        this.diameter = 2 * radius;
    }

    get diameter() {
        return this._diameter;
    }

    set diameter(value) {
        this._diameter = value;
        this._radius = (value / 2.0);
    }


    get area() {
        return (Math.PI * this._radius * this._radius);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.radius = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
console.log(c.area.toFixed(2))