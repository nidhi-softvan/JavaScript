var personData={
    firstName:'nidhi',
    lastName:'jain',
    sayHello:function () {
        console.log("hello "+personData.firstName);
    }
}

personData.sayHello();
var invokeperson=function(
    obj:{firstname:string,lastname:string}
){
    console.log("first name : "+obj.firstname);
    console.log("last name : "+obj.lastname);

}

var user={
    firstname:"nidhi",
    lastname:"jain"
}

invokeperson(user);

invokeperson({firstname:"vidhi",lastname:"jain"})