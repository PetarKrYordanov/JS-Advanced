function sortArray(inputArray, sortMethod) {
    var ascendingComparator = function (a, b) {
        return a - b;
    };

    var descendingComparator = function (a, b) {
        return b - a;
    }

    var sortingStrategy = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return inputArray.sort(sortingStrategy[sortMethod]);
}


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));