
class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();

        this.creditCard = creditCard;

        this._wishList = [];

    }
    get creditCard() {
        return this._creditCard;
    }

    get fullName() {
        return this._fullName;
    }

    get idNumber() {
        return this._idNumber;
    }
    set idNumber(value) {
        this._idNumber = value;
    }
    set creditCard(input) {
        if (!input) {
            let obj = {
                cardNumber: 111,
                expirationDate: "",
                securityNumber: 111
            };
            this._creditCard = obj;
        } else {
            if (input.length < 3) {
                throw new Error('Missing credit card information')
            }
            if (Number.isInteger(input[0]) || Number.isInteger(input[2]) == true) {
                throw new Error("Invalid credit card details");
            }
            this._creditCard = {};
            this._creditCard.cardNumber = input[0];
            this._creditCard.expirationDate = input[1];
            this._creditCard.securityNumber = input[2];
        }
    }
    set fullName(value) {
        if (value.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        let regex = /^[A-Z][a-z]*$/;
        for (const name of value) {
            if (!regex.test(name)) {
                throw new Error("Invalid full name");
            }
        }
        this._fullName = {
            firstName: value[0],
            middleName: value[1],
            lastName: value[2]
        }
    }
    get wishList() {
        return this._wishList;
    }
    set wishList(value) {

        this._wishList.push(value);
        this._wishList = this.wishList.sort(function (a, b) {
            return a.length - b.length
        }
        );
    }
    generateIDNumber() {
        //   let id = 0;
        let vowels = ["a", "e", "o", "i", "u"];
        let lastChar = this.fullName.lastName.slice(-1);
        let id = ((231 * this.fullName.firstName.charCodeAt(0)) + (this.fullName.middleName.length * 139));

        let charToAppend = 7;
        if (vowels.includes(lastChar)) {
            charToAppend = 8
        }

        return id.toString() + charToAppend;
    }

    addCreditCardInfo(input) {

        this.creditCard = input;
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }

        this.wishList = destination;
    }

    getVacationerInfo() {
        let wish = "empty";
        //   console.log(this.creditCard['expirationDate']);
        if (this.wishList.length === 0) {
            return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${wish}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date:\n${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`
        } else {
            let wish = this.wishList.join(', ');
            return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${wish}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date:\nSecurity Number: ${this.creditCard.securityNumber}`
        }
    }
}

let classInstance4 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);

let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

//Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

//Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018", 2131]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
