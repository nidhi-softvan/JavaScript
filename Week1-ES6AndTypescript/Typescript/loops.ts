var num:number=5;
var i:number;
var factorial=1;
for(i=num;i>=1;i--){
    factorial*=i;
}
console.log(factorial);


var j:any;
var k:any="a b c d e f ";
for(j in k){
    console.log(k[j])
}

while(num>10){
    console.log("number greater than 10");
    break;
}

do{
    console.log("number ")
    break;
}
while(num>10)
var numm:number=0;
var count:number=0;
for(numm=0;numm<=10;numm++){
    if(numm%2==0){
        continue;
    }
    console.log(numm)
    count++
} 
console.log("count of odd values between 1 and 10 is : "+count)


