var ids = [1, 2, 3, 4, 5];
var names = ['nidhi', 'vidhi'];
for (var index in names) {
    console.log(names[index]);
}
var options = [true, false, true];
console.log(options[2]);
var books = [
    {
        name: 'sapiens', author: 'yuval noah harari'
    }
];
var arr = ['hello', 1, true];
ids.push(6);
for (var i = 0; i < ids.length; i++) {
    console.log(ids[i]);
}
var person = ['nidhi', 1, true];
person[0] = 100;
person.sort();
console.log(person);
console.log(person.indexOf('nidhi'));
var multiDimen = [[1, 2, 3], [23, 24, 25]];
console.log(multiDimen[0][2]);
console.log(multiDimen[1][2]);
var namesList = new Array("nidhi", "vidhi", "reena");
function disp(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(namesList[i]);
    }
}
disp(namesList);
