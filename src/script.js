"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = require("wondering/random");
console.log((0, random_1.randInt)(3, 10));
// Get the canvas element
var canvas = document.getElementById('myCanvas');
// Check if the canvas element exists
if (canvas) {
    var context = canvas.getContext('2d');
    if (context) {
        // Your canvas drawing code goes here
        context.fillStyle = 'blue';
        context.fillRect(10, 10, 50, 50);
    }
}
