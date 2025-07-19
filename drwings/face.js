function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // Head
  fill("#3a1e06ff");
  ellipse(200, 200, 200, 200);

  // Eyes
  fill(0);
  ellipse(170, 180, 20, 20); // Left eye
  ellipse(230, 180, 20, 20); // Right eye

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(200, 230, 80, 40, 0, PI); // Smiling mouth
}
