var staticMem = /** @class */ (function () {
    function staticMem() {
    }
    staticMem.disp = function () {
        console.log("value of num is  " + staticMem.num);
    };
    return staticMem;
}());
staticMem.num = 12;
staticMem.disp();
