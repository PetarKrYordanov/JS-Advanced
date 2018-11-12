class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];

    }

    addTopic(title, date) {
        let obj = { title, date };
        this.topics.push(obj);
        this.topics = this.topics.sort(function (a, b) {
            return a.date - b.date;
        });
        return this;
    }

    get firstTopic() {
        return this.topics[0]
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1]
    }

    toString() {
        let topicStr = '';
        this.topics.forEach(el => {
            let title = el.title;
            topicStr += ' * ' + el.title + ' - ' + el.date + '\n';
        });
        if (!topicStr) {
            return `Course "${this.title}" by ${this.trainer}` + '\n'
        }

        return `Course "${this.title}" by ${this.trainer}` + '\n' + topicStr;
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("" + js)

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);
