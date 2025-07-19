function setup() {
  createCanvas(400, 400); // Sets up a 400x400 canvas
}

function draw() {
  background(240); // Light gray background
  ellipse(200, 200, 100, 100); // Draws a circle at the center
}

ellipse(200,200,100,100);
// This file is part of the drawings project
// It is subject to the license terms in the LICENSE file found in the top-level directory of this distribution and at          
//  
// face.js
const canvas = document.getElementById("faceCanvas");
const ctx = canvas.getContext("2d");

// Head
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2, true); // Circle for face
ctx.fillStyle = "#FFDAB9"; // Peach color
ctx.fill();
ctx.closePath();

// Eyes
ctx.beginPath();
ctx.arc(170, 180, 10, 0, Math.PI * 2, true); // Left eye
ctx.arc(230, 180, 10, 0, Math.PI * 2, true); // Right eye
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();

// Mouth
ctx.beginPath();
ctx.arc(200, 220, 40, 0, Math.PI, false); // Smiling mouth
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();
