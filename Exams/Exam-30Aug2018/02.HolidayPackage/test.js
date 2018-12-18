
let assert = module.require('chai').assert;
var HolidayPackage = module.require('./HolidayPackage');

describe("TODO …", function () {
    let holiday;
    beforeEach(function () {
        holiday = new HolidayPackage("Italy", 'Summer');
    });
    it("TODO …", function () {
        assert.isObject(holiday);
    });
    it("get insuranceIncluded  should return false", function () {
        assert.isFalse(holiday.insuranceIncluded, "[message]");
    })
    it(" showVacationers() should return 'No vacationers are added yet'", function () {
        assert.equal(holiday.showVacationers(), "No vacationers are added yet", "[message]");
    });
    it("addvacationer('name') should throw an error", function () {
        assert.throw(function () {
            holiday.addVacationer("name");
        }, Error);
    });

    it("addVacationer(' ') should trow an error", function () {
        assert.throw(function () {
            holiday.addVacationer(" ");
        }, Error);
    });

    it("addVacationer(3123) should trow an error", function () {
        assert.throw(function () {
            holiday.addVacationer(124124);
        }, Error);
    });

    it("add corectrly vacationeer and print", function () {
        holiday.addVacationer("Ivan Ivanov");
        holiday.addVacationer('Petar Petrov');
        holiday.addVacationer('Georgi Georgiev');

        let result = "Vacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev";

        assert.equal(holiday.showVacationers(), result, "[message]");
    });

    it("insurance  included acceept string should trow and error", function () {
        assert.throw(function () {
            holiday.insuranceIncluded("true");
        }, Error);
    });

    it("if insurance included accept true correct result", function () {
        holiday.insuranceIncluded = true;
        assert.equal(holiday.insuranceIncluded, true, "[message]");
    });

    it("generateHolidayPackage() should trow error if there are no vacationeeer", function () {
        assert.throw(function () {
            holiday.generateHolidayPackage();
        }, Error);
    });

    it("generate valid vacation package with insurance", function () {
        holiday.insuranceIncluded = true;
        holiday.addVacationer("Ivan Ivanov");
        holiday.addVacationer("Petar Petrov");

        let expected = "Holiday Package Generated\n" +
            "Destination: " + "Italy" + "\n" + "Vacationers:\n" +
            "Ivan Ivanov\nPetar Petrov" + "\n" +
            "Price: 1100";
        assert.equal(holiday.generateHolidayPackage(), expected, "[message]");
    })
    it("generate valid vacation package without insurance", function () {
        holiday.insuranceIncluded = false;
        holiday.addVacationer("Ivan Ivanov");
        holiday.addVacationer("Petar Petrov");

        let expected = "Holiday Package Generated\n" +
            "Destination: " + "Italy" + "\n" + "Vacationers:\n" +
            "Ivan Ivanov\nPetar Petrov" + "\n" +
            "Price: 1000";
        assert.equal(holiday.generateHolidayPackage(), expected, "[message]");
    })
});
