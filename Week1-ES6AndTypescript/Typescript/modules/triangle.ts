import shape=require('./IShape');
export class Triangle implements shape.IShape{
    public draw() {
        console.log("triangle is drawn external module")
    }
}