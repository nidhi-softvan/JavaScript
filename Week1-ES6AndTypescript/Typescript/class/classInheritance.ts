class Shape{
    Area:number

    constructor(a:number){
        this.Area=a
    }
}

class Circle extends Shape{
    disp():void{
        console.log("area of circle : "+this.Area)
    }
}

var shapeCircle=new Circle(123)
shapeCircle.disp()