function disp_details(id:number,name:string,mail_id?:string){
    console.log("ID : ",id);
    console.log("name : ",name);

    if(mail_id!=undefined)
    console.log("email id : ",mail_id)

}

disp_details(12,"nidhi");
disp_details(10,"vidhi","vidhi@gmail.com");


function addNumbers(...nums:number[]){
    var i;
    var sum:number=0;

    for(i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    console.log("sum of numbers ",sum)
}

addNumbers(10,12,2,3,45);

function calculate_discount(price:number,rate:number=0.50){
    var discount=price*rate;
    console.log("discount amount ",discount)
}

calculate_discount(1000);
calculate_discount(1000,0.30);

var greet=function(){
    return"hello world";
}

console.log(greet());

var product=function(a:number,b:number){
    return a*b;
}

console.log(product(12,2));

var myFunction=new Function("a","b","return a*b");

var func=myFunction(4,3);
console.log(func);

var foo=(x:number)=>10+x
console.log(foo(100));



