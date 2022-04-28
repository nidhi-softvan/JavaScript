"use strict";
exports.__esModule = true;
var circle = require("./circle");
var triangle = require("./triangle");
function drawAllShape(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShape(new circle.Circle());
drawAllShape(new triangle.Triangle());
