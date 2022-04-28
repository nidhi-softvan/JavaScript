interface RunOptions{
    program:string
    commandline:string[]|string|(()=>string)
}

var optionsList:RunOptions={program:"test1",commandline:"hello"}
console.log(optionsList.commandline)

optionsList={program:"test1",commandline:["hello","there"]};
console.log(optionsList.commandline[0])
console.log(optionsList.commandline[1])

optionsList={program:"test1",commandline:()=>{
    return "-->hello there"
}}

var fn:any=optionsList.commandline;
console.log(fn())