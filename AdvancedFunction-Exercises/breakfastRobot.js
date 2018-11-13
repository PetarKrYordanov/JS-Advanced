let manager = (function solution() {

    let ingredient = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let coke = {
        carbohydrate: 10,
        flavour: 20
    };
    let burger = {
        carbohydrate: 5,
        fat: 7,
        flavour: 3
    };
    let omelet = {
        protein: 5,
        fat: 1,
        flavour: 1
    };

    let cheverme = {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10
    };

    let apple = {
        carbohydrate: 1,
        flavour: 2
    }
    function missingError(element) {
        return `Error: not enough ${element} in stock`
    }

    function prepare(recipe, quantity) {
        let obj = (eval(recipe));
        let keys = Object.keys(obj);
        for (const key of keys) {
            if (obj[key] * +quantity > ingredient[key]) {

                return missingError(key);
            }
        }
        for (const key of keys) {
            ingredient[key] -= (quantity * obj[key]);
        }
        return 'Success';
    }

    function restock(element, quantity) {
        ingredient[element] += +quantity;
        return 'Success';
    }

    return function (input) {

        if (input === 'report') {
            return (function () {
                return `protein=${ingredient.protein} carbohydrate=${ingredient.carbohydrate} fat=${ingredient.fat} flavour=${ingredient.flavour}`;
            })();
        }

        let [command, elemOrRecipe, quantity] = input.split(/\s+/g).filter(e => e !== null);

        if (command === 'restock') {
            return restock(elemOrRecipe, +quantity);
        } else if (command === 'prepare') {
            return prepare(elemOrRecipe, +quantity)
        }
    }
})()


console.log(manager("prepare cheverme 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("report"));