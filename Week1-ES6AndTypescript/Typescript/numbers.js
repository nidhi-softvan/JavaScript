console.log("typescript number properties : ");
console.log("maximum value that a number variable can hold : " + Number.MAX_VALUE);
console.log("least value that a number variable can hold : " + Number.MIN_VALUE);
console.log("value of positive infinity : " + Number.POSITIVE_INFINITY);
console.log("value of negative infinity : " + Number.NEGATIVE_INFINITY);
var day = 3;
if (day <= 0 || day > 7) {
    day = Number.NaN;
    console.log("day is " + day);
}
else {
    console.log("day's value ");
}
