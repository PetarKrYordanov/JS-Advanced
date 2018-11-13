function monkeyPatcher(commandName) {
    let totalScore = this.upvotes - this.downvotes;
    let totalVotes = this.upvotes + this.downvotes;

    let obj = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let positive = this.upvotes;
            let negative = this.downvotes;
            // totalScore = positive - negative
            // totalVotes = positive - negative;

            if (totalVotes > 50) {
                let valueToAdd = totalVotes > 50 ? Math.ceil((Math.max(positive, negative)) * 0.25) : 0;
               
                positive += valueToAdd;
                negative += valueToAdd;
            }

            return [positive, negative,positive -negative , getRating.call(this)]

            function getRating() {
                if (totalVotes < 10) {
                    return 'new'
                }
                else if (this.positive > 0.66 * (this.negative + this.positive)) {
                    return 'hot';
                } else if (totalScore >= 0 && (this.positive > 100 || this.negative > 100)) {
                    return 'controversial';
                } else if (this.upvotes < this.downvotes) {
                    return 'unpopular';
                } else {
                    return 'new'
                }
            }

        }
    }
    return obj[commandName]();

}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
console.log(monkeyPatcher.call(post, 'score')); // [127, 127, 0, 'controversial']

for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');
}

console.log(monkeyPatcher.call(post, 'score')); // [139, 189, -50, 'unpopular']