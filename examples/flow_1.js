/* https://www.youtube.com/watch?v=1-QXuR-XX_s */

const points = [];
const density = 5;
const mult = 0.005;

function setup() {
  const space = width / density;

  createCanvas(windowWidth, windowHeight);
  background(30);

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      const p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(255);

  for (let i = 0; i < points.length; i++) {
    const angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    points[i].add(createVector(cos(angle), sin(angle)));

    ellipse(points[i].x, points[i].y, 1);
  }
}
