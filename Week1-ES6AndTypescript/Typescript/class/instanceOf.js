var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var personobj = new Person();
var isPerson = personobj instanceof Person;
console.log("obj is an instance of person " + isPerson);
