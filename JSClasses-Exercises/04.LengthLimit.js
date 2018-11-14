class Stringer {
    constructor(text, length) {
        this.innerLength = length;
        this.innerString = text;

    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else if (this.innerLength == 0) {
            return '...';
        } else if (this.innerLength === this.innerString.length) {
            return this.innerString;
        }
        else {

            let result = this.innerString.slice(0, this.innerLength) + '.'.repeat(3);
            //  console.log(result);
            this.innerLength = result.length;
            return result;

        }
    }

    increase(increaseNum) {
        this.innerLength += +increaseNum;
    }

    decrease(decreaseNum) {
        this.innerLength -= +decreaseNum;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); //Test

// test.decrease(3);
// console.log(test.toString()); //Te...

// test.decrease(5);
// console.log(test.toString()); //...

// test.increase(4);
// console.log(test.toString()); //Test

let s = new Stringer("Viktor", 6);
s.decrease(3);

console.log(s.innerLength);