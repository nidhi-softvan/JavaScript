function disp_details(id, name, mail_id) {
    console.log("ID : ", id);
    console.log("name : ", name);
    if (mail_id != undefined)
        console.log("email id : ", mail_id);
}
disp_details(12, "nidhi");
disp_details(10, "vidhi", "vidhi@gmail.com");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of numbers ", sum);
}
addNumbers(10, 12, 2, 3, 45);
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("discount amount ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
var greet = function () {
    return "hello world";
};
console.log(greet());
var product = function (a, b) {
    return a * b;
};
console.log(product(12, 2));
var myFunction = new Function("a", "b", "return a*b");
var func = myFunction(4, 3);
console.log(func);
var foo = function (x) { return 10 + x; };
console.log(foo(100));
