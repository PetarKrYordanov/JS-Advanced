var list = require('../add-delete-in-list');
let assert = module.require('chai').assert;

describe("add delete in list", function () {

    it("function sould return object", function () {
        console.log(list.toString());
        assert.isNotNull(list, "[message]");
        assert.isObject(list, "[message]");
    });

    it("shuld have all properies (add, toString, delete)", function () {
        assert.isFunction(list.add, "add expect to be function");
        assert.isFunction(list.delete, "remove sould return function")
        assert.isFunction(list.toString, "toString should return function");
    });

    it("Check if function add item", function () {
        list.add(4);
        list.add(5);
        let result = list.toString();
        assert.isString(result, "Check is it string");
        assert.equal(result, "4, 5", "excpected [4, 5]");
    });

    it("Check function remove option is Succesfull", function () {
        list.add(4);
        list.add(5);
        list.add("two");
        let result = list.delete(1);
        assert.isNumber(result, "[message]");
        assert.equal(result, '5');
        let isString = list.delete(3);
        assert.isString(isString, "[message]");
        assert.isDefined(isString, "[message]");
        assert.equal(isString, "two", "[message]");
    });

    it("function remove oprtion return undefined", function () {
        list.add(4);
        list.add(5);
        list.add({ name: 'pesho' });
        let obj = list.delete(5);

        assert.isObject(obj, "function should return {}");
        let result = list.delete(-2);
        assert.isUndefined(result, "[message]");
        result = list.delete('string');
        assert.isUndefined(result, "[message]");
        console.log(list.toString());

        assert.equal(list.toString(), "4, 4, 5, 4, 5");
    });

    it("check remove arguments", function () {

        let intputObj = list.delete({});
        assert.isUndefined(intputObj, "should return undefined when input is obj");
        let input = function () {

        }
        let inputfun = list.delete(input)
        assert.isUndefined(inputfun, "should return undefined where input in function");
        assert.isUndefined(list.delete(null), "should return undefined where input in null");
        assert.isUndefined(list.delete(undefined), "should return undefined where input in undefined");
    });

    it("", function () {
        assert.isUndefined(list.add(), "[message]");
        assert.isUndefined(list.delete(5), "[message]");
        assert.isUndefined(list.delete([1, 3]), "[message]");
        assert.isUndefined(list.delete('test'), "[message]");
        assert.isUndefined(list.delete(), "[message]");
        list.add(function () { });
        console.log(list.toString());
        assert.equal(list.toString(), '4, 4, 5, 4, 5, function () { }', "[message]");
        assert.isFunction(list.delete(5), "[message]");
        assert.isUndefined(list.delete('2'), "[message]");
        list.add(["sdas", 2]);
        let result = list.delete(5);
        assert.isDefined(result, "[message]");
        assert.isArray(result, "[message]");

        list.add(true);
        assert.isBoolean(list.delete(5), "[message]");

    })
});
