var val;
val = 12;
console.log("numeric value of val " + val);
val = "hello there";
console.log("string value of val " + val);
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("nidhi");
console.log("printing names in array : ");
disp(["nidhi", "vidhi", "seeta"]);
