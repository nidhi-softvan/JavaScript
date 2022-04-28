import shape=require('./IShape');
export class Circle implements shape.IShape{
    public draw() {
        console.log("circle is drawn external module")
    }
}