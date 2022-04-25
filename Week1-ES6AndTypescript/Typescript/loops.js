var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
var j;
var k = "a b c d e f ";
for (j in k) {
    console.log(k[j]);
}
while (num > 10) {
    console.log("number greater than 10");
    break;
}
do {
    console.log("number ");
    break;
} while (num > 10);
var numm = 0;
var count = 0;
for (numm = 0; numm <= 10; numm++) {
    if (numm % 2 == 0) {
        continue;
    }
    console.log(numm);
    count++;
}
console.log("count of odd values between 1 and 10 is : " + count);
