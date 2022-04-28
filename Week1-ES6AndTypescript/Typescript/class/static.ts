class staticMem{
    static num:number;

    static disp():void{
        console.log("value of num is  "+staticMem.num)
    }
}

staticMem.num=12
staticMem.disp()