var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("engine is " + this.engine);
    };
    return Car;
}());
var objCar = new Car("engine 1");
console.log("reading attribute value of engine is : " + objCar.engine);
objCar.disp();
