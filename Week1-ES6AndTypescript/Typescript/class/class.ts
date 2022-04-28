class Car{
    engine:string;

    constructor(engine:string){
        this.engine=engine
    }

    disp():void{
        console.log("engine is "+this.engine)
    }
}

var objCar=new Car("engine 1")

console.log("reading attribute value of engine is : "+objCar.engine);

objCar.disp()