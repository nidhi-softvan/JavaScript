var global_num = 12; //global variable 
var s = /** @class */ (function () {
    function s() {
        this.num_val = 13; //class variable 
    }
    s.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    s.sval = 10; //static field 
    return s;
}());
console.log("Global num: " + global_num);
console.log(s.sval); //static variable  
var obj = new s();
console.log("Global num: " + obj.num_val);
