function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot bbe instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }

    return { Melon }
}