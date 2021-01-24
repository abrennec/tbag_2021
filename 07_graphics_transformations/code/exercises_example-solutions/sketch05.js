
// Source and reference: https://editor.p5js.org/ri1/sketches/lYJKhcDDV

// This sketch nicely combines changes to the geometry with
// audio. Check it out and take it as an inspiration in the 
// first place. 

// Think about how you might make use of this in connection
// with the musical piece you have created.


let angle = 0;
let canvas;
let amplitude;
let vol;
let music;

function preload() {
    // TODO: 
    // Add a music file so that the sketch works
    // source: https://freesound.org/people/Timbre/sounds/94840/
  music = loadSound("94840__timbre__water-in-metal-pan-music.wav");

}

function setup() {
  canvas = createCanvas(400, 400, WEBGL);
  canvas.mouseClicked(musicController);
  amplitude = new p5.Amplitude();

}

function draw() {
  background(175);
  normalMaterial();
  vol = amplitude.getLevel();

    // In the push() and pop() settings below, several rotation 
    // transformations are excuted. 
    // 1) How would you have to combine the rotation matrices into one?
    // 2) How would the applyMatrix() function look like?

  // 1)
  // Multiplicate each rotation matrix. But use reverse order, like shown below:
  // rotateZ * rotateY * rotateX

  push();
  translate(0, -80);
  // rotateX(tan(angle));
  // rotateY(tan(angle));
  // rotateZ(tan(angle));

  // 2)
  let c = cos(tan(angle));
  let s = sin(tan(angle));
  applyMatrix( c*c,  -s*c+c*s*s,  -s*-s-c*c*s,  0,
               c*s,   c*c+s*s*s,   c*s-s*s*c,   0,
               s,    -c*s,         c*c,         0,
               0,     0,           0,           1);

  torus(40 + vol * 200, 10, 6);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 5, 6);
  pop();

  //2
  push();
  translate(-100, 30);
  rotateX(cos(angle));
  rotateY(cos(angle));
  rotateZ(cos(angle));
  torus(40 + vol * 200, 10, 6);
  rotateY(angle);
  rotateZ(angle);
  torus(20, 7, 6);
  pop();

  //3
  push();
  translate(100, 30);
  rotateX(sin(angle));
  rotateY(sin(angle));
  rotateZ(sin(angle));
  torus(40 + vol * 200, 10, 6);
  rotateY(-angle);
  rotateZ(-angle);
  torus(20, 8, 6);
  pop();


  angle += 0.003;

}

function musicController() {
  if (music.isPlaying()) {
    music.stop();
  } else {
    music.play();
  }
}