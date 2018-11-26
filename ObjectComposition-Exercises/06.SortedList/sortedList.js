function getSortedList() {
    return {
        list: [],
        size: 0,
        add: function (element) {

            this.list.push(element);
            this.list.sort((a, b) => a - b);
            this.size++;
        },
        remove: (function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }
        }),
        get: function (index) {
            if (index >= 0 && index < this.size) {
                return this.list[index];
            }
        }
    }
}

let sortedList = getSortedList();
sortedList.add(1);
sortedList.add(6);
sortedList.add(4);
sortedList.add(5);
sortedList.add(2);
sortedList.get(4);


console.log(sortedList.size);