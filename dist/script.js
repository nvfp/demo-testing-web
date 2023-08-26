"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wondering_1 = require("wondering");
console.log((0, wondering_1.randInt)(3, 10));
// Get the canvas element
const canvas = document.getElementById('myCanvas');
// Check if the canvas element exists
if (canvas) {
    const context = canvas.getContext('2d');
    if (context) {
        // Your canvas drawing code goes here
        context.fillStyle = 'blue';
        context.fillRect(10, 10, 50, 50);
    }
}
