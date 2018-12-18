# 1.JS Advanced: 30.08.2018

# 2.Problem 2. Holiday Package (Unit Testing)

You are given the following **JavaScript class** :

| HolidayPackage.js |
| --- |
| classHolidayPackage {    constructor(destination, season) {        this.vacationers = [];        this.destination = destination;        this.season = season;        this.insuranceIncluded = false; // Default value    }     showVacationers() {        if (this.vacationers.length \&gt; 0)            return&quot;Vacationers:\n&quot; + this.vacationers.join(&quot;\n&quot;);        else            return&quot;No vacationers are added yet&quot;;    }     addVacationer(vacationerName) {        if (typeofvacationerName !== &quot;string&quot; || vacationerName === &#39; &#39;) {            thrownewError(&quot;Vacationer name must be a non-empty string&quot;);        }        if (vacationerName.split(&quot; &quot;).length !== 2) {            thrownewError(&quot;Name must consist of first name and last name&quot;);        }        this.vacationers.push(vacationerName);    }     getinsuranceIncluded() {        returnthis.\_insuranceIncluded;    }     setinsuranceIncluded(insurance) {        if (typeofinsurance !== &#39;boolean&#39;) {            thrownewError(&quot;Insurance status must be a boolean&quot;);        }        this.\_insuranceIncluded = insurance;    }     generateHolidayPackage() {        if (this.vacationers.length \&lt; 1) {            thrownewError(&quot;There must be at least 1 vacationer added&quot;);        }        lettotalPrice = this.vacationers.length \* 400;         if (this.season === &quot;Summer&quot; || this.season === &quot;Winter&quot;) {            totalPrice += 200;        }         totalPrice += this.insuranceIncluded === true ? 100 : 0;         return&quot;Holiday Package Generated\n&quot; +            &quot;Destination: &quot; + this.destination + &quot;\n&quot; +            this.showVacationers() + &quot;\n&quot; +            &quot;Price: &quot; + totalPrice;    }} |

### Functionality

_For this one your contribution to the project is to make sure that your colleagues have correctly implemented the HolidayPackage class, which takes care of generating an offer for a complete holiday package for the clients of the travel agency._​

The above code defines a **class** that contains information about a **holiday package**. An **instance** of the class should support the following operations:

- Must be **instantiated** with two parameters – a string destination and a string season.
- Accessor **insuranceIncluded** – used to get and set the value of the insurance status.
- Function **showVacationers()** – returns a string with the vacationers&#39; names. If there aren&#39;t any, returns a corresponding message.
- Function **addVacationer()** – adds a vacationer to the array of vacationers. In case of an invalid name, the function throws an error.
- Function **generateHolidayPackage()** – calculates the total price for the holiday package and returns a string, containing an overview of the generated holiday package. However, in case that there are no vacationers, it throws an error. The total price includes 400BGN per vacationer, an extra 200BGN season fee for the summer and winter seasons and 100BGN for the insurance, if included in the package.

When creating an instance, changing any of the property values, or adding a new vacationer, the parameters are validated. They must follow these rules:

- **insuranceIncluded** – Boolean
- **vacationerName** – non-empty string, containing a valid name. A name is considered valid when it consists of both first name and last name.

**_Scroll down for examples and details about submitting to Judge._**

### Examples

This is an example how this code is **intended to be used** :

| Sample code usage |
| --- |
| letholidayPackage = newHolidayPackage(&#39;Italy&#39;, &#39;Summer&#39;); console.log(holidayPackage.showVacationers()); // should throw an errortry {    holidayPackage.generateHolidayPackage();} catch (err) {    console.log(&#39;Error: &#39; + err.message);}// should throw an errortry {    holidayPackage.addVacationer(&#39;&#39;);} catch (err) {    console.log(&#39;Error: &#39; + err.message);} // should throw an errortry {    holidayPackage.addVacationer(&#39;Ivan&#39;);} catch (err) {    console.log(&#39;Error: &#39; + err.message);} holidayPackage.addVacationer(&#39;Ivan Ivanov&#39;);holidayPackage.addVacationer(&#39;Petar Petrov&#39;);holidayPackage.addVacationer(&#39;Georgi Georgiev&#39;); console.log(holidayPackage.showVacationers()); // should throw an errortry {    holidayPackage.insuranceIncluded = &#39;true&#39;;} catch (err) {    console.log(&#39;Error: &#39; + err.message);} holidayPackage.insuranceIncluded = true; console.log(holidayPackage.generateHolidayPackage()); |
| Corresponding output |
| No vacationers are added yetError: There must be at least 1 vacationer addedError: Vacationer name must be a non-empty stringError: Name must consist of first name and last nameVacationers:Ivan IvanovPetar PetrovGeorgi GeorgievError: Insurance status must be a booleanHoliday Package GeneratedDestination: ItalyVacationers:Ivan IvanovPetar PetrovGeorgi GeorgievPrice: 1500 |

### Your Task

Using **Mocha** and **Chai** write **JS unit tests** to test the entire functionality of the **HolidayPackage** class. Make sure instances of it have all the required functionality and validation. You may use the following code as a template:

| describe(&quot;_TODO_ …&quot;, function() {
    _it_(&quot;_TODO …_&quot;, function() {        _//_ _TODO:_ …    });
    _//_ _TODO:_ …}); |
| --- |

### Submission

Submit your tests inside a **describe()** statement, as shown above.