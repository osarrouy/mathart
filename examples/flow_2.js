const points = [];
const density = 10;
const mult = 0.005;

function setup() {
  const space = width / density;

  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      const p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
}

function draw() {
  noStroke();
  // fill(255);
  fill(color('cyan'));

  for (let i = 0; i < points.length; i++) {
    const angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    points[i].add(createVector(cos(angle), sin(angle)));

    ellipse(points[i].x, points[i].y, 1);
  }
}
