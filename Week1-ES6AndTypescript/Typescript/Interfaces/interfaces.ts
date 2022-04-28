interface IPerson{
    firstname:string,
    lastname:string,
    sayHi:()=>string
}

var customer:IPerson={
    firstname:"vidhi",
    lastname:"jain",
    sayHi:():string=>{
        return "hello there"
    }
}

console.log("customer object")
console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer.sayHi())

var userdata:IPerson={
    firstname:"vidhi",
    lastname:"jain",
    sayHi:():string=>{
        return "hello there"
    }
}

console.log("user data object")
console.log(userdata.firstname)
console.log(userdata.lastname)
console.log(userdata.sayHi())

