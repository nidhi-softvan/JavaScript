var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "there";
    }
    return Encapsulate;
}());
var encapobj = new Encapsulate();
console.log(encapobj.str);
