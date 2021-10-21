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
  constructor(amplitude, frequency, lambda) {
    this.amplitude = amplitude;
    this.celerity = frequency;
    this.lambda = lambda;
    this._init__phases();
  }

  _init__phases() {
    this.phases = [];
    const nbOfSamples = floor(width / resolution);

    for (let i = 0; i < nbOfSamples; i++) {
      this.phases[i] = map(i, 0, nbOfSamples, 0, TWO_PI / this.lambda);
    }
  }

  draw() {
    noFill();
    stroke(252, 238, 33);
    strokeWeight(4);
    beginShape();
    for (let i = 0; i < this.phases.length; i++) {
      const y = map(sin(this.phases[i]), -1, 1, -this.amplitude, this.amplitude);
      const x = map(i, 0, this.phases.length, -width / 2, width / 2);
      // line(x, 0, x, y);
      // circle(x, y, dx * 2);
      vertex(x, y);
      console.log(y);
      // console.log(y);
      this.phases[i] += 0.02;
    }
    endShape();
  }
}

let angles = [];
let angleV = [];
const resolution = 2;
const lambda = 6;
let samples;
let waves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let total = floor(width / resolution);
  let samples = floor(width / resolution);
  waves[0] = new Wave(100, 5, 1);
  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, lambda * TWO_PI);
    // angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  // fill(252, 238, 33);
  waves[0].draw();
  // noFill();
  // stroke(252, 238, 33);
  // beginShape();
  // for (let i = 0; i < angles.length; i++) {
  //   let y = map(sin(angles[i]), -1, 1, -10, 10);
  //   strokeWeight(4);
  //   let x = map(i, 0, angles.length, -width / 2, width / 2);
  //   // line(x, 0, x, y);
  //   // circle(x, y, dx * 2);
  //   vertex(x, y);
  //   angles[i] += 0.5;
  //   // angles[i] += angleV[i];
  // }
  // endShape();
}
