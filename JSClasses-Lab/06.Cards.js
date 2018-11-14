let result = (function () {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this._suit = null;
            this._face = null;

            this.face = face;
            this.suit = suit;
        }
        static Suits = {
            SPADES: '♠',
            HEARTS: '♥',
            DIAMONDS: '♦',
            CLUBS: '♣',
        };
        get suit() {
            return this._suit;
        }

        set suit(value) {
            console.log();
            if (!Object.keys(this.Suits).includes(value)) {
                throw new Error()
            }

            this._suit = value
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!validFaces.includes(value)) {
                throw new Error("Invalid card face value")
            }

            this._face = value
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.Clubs);
card.face = "A";
card.suit = Suits.Diamond;
console.log(card);

let card2 = new Card("1", Suits.Diamond);