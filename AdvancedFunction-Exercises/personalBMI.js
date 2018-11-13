function chart(name, age, weight, height) {

    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: ((weight, height) => {
            return Math.round(weight / Math.pow(height / 100, 2));
        })(+weight, +height),

    };

    let status = "obese";
    if (person.BMI < 18.5) {
        status = "underweight";
    } else if (person.BMI < 25) {
        status = "normal";
    } else if (person.BMI < 30) {
        status = "overweight";
    }


    person.status = status;

    if (status === "obese") {
        person.recommendation = "admission required";
    }

    return person;
}

console.log(chart("Peter", 29, 75, 182))
//chart("Honey Boo Boo", 9, 57, 137);
