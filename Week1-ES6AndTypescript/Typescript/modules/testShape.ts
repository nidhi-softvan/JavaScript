import shape=require('./IShape');
import circle=require('./circle');
import triangle=require('./triangle');

function drawAllShape(shapeToDraw:shape.IShape){
    shapeToDraw.draw()
}

drawAllShape(new circle.Circle());
drawAllShape(new triangle.Triangle());
