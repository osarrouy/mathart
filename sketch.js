// Graphing Sine Wave (Graphing Wave)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/JLAc9hMtcxk
// https://thecodingtrain.com/learning/nature-of-code/3.6-graphing-sine.html

// Sine Wave Graph Exercise: https://editor.p5js.org/codingtrain/sketches/EIbEYLTaZ
// Playing With Period: https://editor.p5js.org/codingtrain/sketches/SbRC-G0lU
// Graphing Wave: https://editor.p5js.org/codingtrain/sketches/c_S9jiXz-
// Circular Wave Exercise: https://editor.p5js.org/codingtrain/sketches/mOm2Is7ba

// this class describes the properties of a single particle.
class Wave {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor(amplitude, frequency, lambda, color, weight) {
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.lambda = lambda;
    this.color = color;
    this.weight = weight;
    this._init__phases();
  }

  _init__phases() {
    this.phases = [];
    const nbOfSamples = floor(width / RESOLUTION) + 1;

    for (let i = 0; i < nbOfSamples; i++) {
      this.phases[i] = map(i, 0, nbOfSamples, 0, TWO_PI / this.lambda);
    }
  }

  draw() {
    noFill();
    stroke(this.color);
    strokeWeight(this.weight);
    beginShape();
    for (let i = 0; i < this.phases.length; i++) {
      const y = map(sin(this.phases[i]), -1, 1, -this.amplitude, this.amplitude);
      const x = map(i, 0, this.phases.length, -width / 2, width / 2);
      // line(x, 0, x, y);
      // circle(x, y, dx * 2);
      vertex(x, y);
      // console.log(y);
      this.phases[i] += this.frequency * 0.02;
    }
    endShape();
  }
}

const MAX_AMPLITUDE = 50;
const MIN_AMPLITUDE = 10;
const NB_OF_WAVES = 100;
const RESOLUTION = 2;

let waves = [];

const _random = {
  amplitude: () => {
    return random(MIN_AMPLITUDE, MAX_AMPLITUDE);
  },
  frequency: () => {
    return random(1, 5);
  },
  lambda: () => {
    return random(1, 2);
  },
  color: () => {
    r = random(255); // r is a random number between 0 - 255
    g = random(255); // g is a random number betwen 100 - 200
    b = random(255); // b is a random number between 0 - 100
    a = random(50, 150); // a is a random number between 200 - 255
    return color(r, g, b, a);
  },
  weight: () => {
    return random(1, 4);
  },
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NB_OF_WAVES; i++) {
    waves[i] = new Wave(_random.amplitude(), _random.frequency(), _random.lambda(), _random.color(), _random.weight());
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < NB_OF_WAVES; i++) {
    waves[i].draw();
  }
}
