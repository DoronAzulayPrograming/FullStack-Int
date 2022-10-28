"use strict";
exports.__esModule = true;
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.greet = function () {
        console.log("hi " + this.name + " age: " + this.age);
    };
    Dog.prototype.bark = function () {
        console.log("havvv");
    };
    return Dog;
}());
exports.Dog = Dog;
