function solve(obj) {
    let modifiedCar = {};
    modifiedCar.model = obj.model;
    let engine;

    if (obj.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (obj.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    modifiedCar.engine = engine;

    modifiedCar.carriage = {
        type: obj.carriage,
        color: obj.color
    }

    modifiedCar.wheels = (() => {
        let wheels = [];
        if (obj.wheelsize % 2 === 0) {
            for (var i = 0; i < 4; i++) wheels.push(obj.wheelsize - 1);
        } else {
            for (var i = 0; i < 4; i++) wheels.push(obj.wheelsize);
        }
        return wheels;
    })();
    //   console.log(modifiedCar);
    return modifiedCar;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);