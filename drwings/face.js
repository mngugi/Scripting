function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // Head
  fill("#472405ff");
  ellipse(200, 200, 210, 210);

  // Eyes
  fill(0);
  ellipse(170, 180,40,40); // Left eye
  ellipse(230, 180, 40,40); // Right eye

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(200, 230, 80, 40, 0, PI); // Smiling mouth
}
