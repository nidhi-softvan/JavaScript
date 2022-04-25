var num:number=5
if(num>0){
    console.log(num+" is positive");
}else if(num>0){
    console.log(num+" is negative");
}else{
    console.log(num+"is neither positive nor negative")
}

var grade:string='A';
switch(grade){
    case "A":{
        console.log("excellent")
        break;
    }
    case "B":{
        console.log("good")
        break;
    }
    case "C":{
        console.log("fair")
        break;
    }
    case "D":{
        console.log("poor")
        break;
    }
    default:{
        console.log("invalid choice");
        break;
    }
}