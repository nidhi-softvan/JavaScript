var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var loanObj = new AgriLoan(10, 2);
console.log("interest is : " + loanObj.interest);
console.log("rebate is : " + loanObj.rebate);
