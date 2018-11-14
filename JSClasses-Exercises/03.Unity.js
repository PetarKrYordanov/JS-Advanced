class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }
    getRats() {
        return this.rats;
    }

    toString() {
        let result = this.name;
        if (this.rats.length !== 0) {
            result +=
                this.rats.map(e => '\n##' + e.name);
        }
        return result;
    }
}


let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]
let Gosho = new Rat("Gosho");
test.unite(Gosho);
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
