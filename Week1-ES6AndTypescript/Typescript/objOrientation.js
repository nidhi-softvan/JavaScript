var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("hello world");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
