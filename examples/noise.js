let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let maxwaves = 4; // total # of waves to add together

let theta = 0.0;
let amplitude = new Array(maxwaves); // Height of wave
// Value for incrementing X, to be calculated
// as a function of period and xspacing
let dx = new Array(maxwaves);
// Using an array to store height values
// for the wave (not entirely necessary)
let yvalues;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(0);

  frameRate(30);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 16;

  for (let i = 0; i < maxwaves; i++) {
    amplitude[i] = random(10, 30);
    let period = random(50, 300); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave(255);
  calcWave();
  // renderWave(color('cyan'));
}

function calcWave() {
  // Increment theta (try different values
  // for 'angular velocity' here
  w = width + 16;

  for (let i = 0; i < maxwaves; i++) {
    amplitude[i] = random(10, 30);
    let period = random(50, 300); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w / xspacing));

  theta += 0.02;

  // Set all height values to zero
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }

  // Accumulate wave height values
  for (let j = 0; j < maxwaves; j++) {
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0) yvalues[i] += sin(x) * amplitude[j];
      else yvalues[i] += cos(x) * amplitude[j];
      x += dx[j];
    }
  }
}

function renderWave(color) {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(color, 50);
  ellipseMode(CENTER);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, width / 2 + yvalues[x], 2, 2);
  }
}
