function argumentMap() {

    let countArguments = new Map();
    for (let i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        var type = typeof obj;

        console.log(type + ': ' + obj);
        if (countArguments.has(type) === false) {
            countArguments.set(type, 0);
        }

        countArguments.set(type, countArguments.get(type) + 1);
    }

    let sortedKeys = Array
        .from(countArguments.keys()).sort((a, b) => countArguments.get(b) - countArguments.get(a));

    for (const key of sortedKeys) {
        console.log(`${key} = ${countArguments.get(key)}`);
    }
}

argumentMap('cat', 42, function () { console.log('Hello world!'); })