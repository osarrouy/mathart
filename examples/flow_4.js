const points = [];
const density = 10;
const mult = 0.001;
const radius = 300;

let r1, r2, g1, g2, b1, b2;

function setup() {
  const space = width / density;

  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

  shuffle(points, true);

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      const p = createVector(x + random(-10, 10), y + random(-10, 10));
      // console.log(p);
      points.push(p);
    }
  }
}

function draw() {
  let max;
  noStroke();

  if (frameCount <= points.length) {
    max = points.length;
  } else {
    max = frameCount;
  }

  r = random(255); // r is a random number between 0 - 255
  g = random(100, 200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(1, 5); // a is a random number between 200 - 255

  stroke((r1 + r2) / 2, (g1 + g2) / 2, (b1 + b2) / 2, a);
  strokeWeight(2);
  noFill();
  ellipse(width / 2, height / 2, radius * 2.5);
  noStroke();

  for (let i = 0; i < max; i++) {
    const r = map(points[i].x, 0, width, r1, r2);
    const g = map(points[i].y, 0, height, g1, g2);
    const b = map(points[i].x, 0, width, b1, b2);
    const alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, radius, 255, 100);

    fill(r, g, b, alpha);

    const angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (dist(width / 2, height / 2, points[i].x, points[i].y) < radius) {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
}

function mouseClicked() {
  const timestamp = Date.now();
  saveCanvas(timestamp + '.png', 'png');
}
