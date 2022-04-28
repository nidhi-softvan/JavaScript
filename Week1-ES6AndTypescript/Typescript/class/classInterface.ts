interface ILoan{
    interest:number
}

class AgriLoan implements ILoan{
    interest: number
    rebate:number


    constructor(interest:number,rebate:number){
        this.interest=interest
        this.rebate=rebate
    }



}

var loanObj=new AgriLoan(10,2)
console.log("interest is : "+loanObj.interest)
console.log("rebate is : "+loanObj.rebate)