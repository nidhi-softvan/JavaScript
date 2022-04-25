let ids:number[]=[1,2,3,4,5];

let names:string[]=['nidhi','vidhi'];
for(var index in names){
    console.log(names[index])
}
let options:boolean[]=[true,false,true];
console.log(options[2]);
let books:object[]=[
    {
        name:'sapiens',author:'yuval noah harari'
    }
];
let arr:any[]=['hello',1,true];
ids.push(6);
for(var i=0;i<ids.length;i++){
    console.log(ids[i]);
}
let person:(string|number|boolean)[]=['nidhi',1,true];

person[0]=100;

person.sort();
console.log(person);
console.log(person.indexOf('nidhi'));

var multiDimen:number[][]=[[1,2,3],[23,24,25]]

console.log(multiDimen[0][2])
console.log(multiDimen[1][2])

var namesList:string[]=new Array("nidhi","vidhi","reena");

function disp(arr_names:string[]){
    for(var i=0;i<arr_names.length;i++) {
        console.log(namesList[i])
    }
}

disp(namesList)



