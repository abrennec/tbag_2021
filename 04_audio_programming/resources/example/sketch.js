// This example is based on the following scripts:
// https://p5js.org/examples/sound-load-and-play-sound.html
// 

let sample_cow, sample_glass, sample_slamming;
let button_cow, button_glass, button_slamming;
let radio_playmode_cow, radio_playmode_glass, radio_playmode_slamming;

function setup() {
  // Loading the sound samples
  loadSamples();

  // Creating buttons, to play the sound
  setupUI();
    

  // Create and setup canvas
  //createCanvas(720, 200);
  //background(255, 0, 0);
}

function loadSamples() {
  sample_cow = loadSound('assets/58277__benboncan__cow.wav');
  sample_glass = loadSound('assets/440773__mgamabile__smashing-glass.wav');
  sample_slamming = loadSound('assets/379924__supercow8399__slamming-on-wooden-desk.mp3');
}

function setupUI() {
  // Buttons
  button_cow = createButton('Cow');
  button_cow.position(10 , 10);
  button_cow.mousePressed(function(){
    buttonPressed(sample_cow);
  });

  button_glass = createButton('Glass');
  button_glass.position(10 , 40);
  button_glass.mousePressed(function(){
    buttonPressed(sample_glass);
  });

  button_slamming = createButton('Slamming');
  button_slamming.position(10 , 70);
  button_slamming.mousePressed(function(){
    buttonPressed(sample_slamming);
  });

  // Radio buttons for playing mode
  createSpan('Play Mode: ').position(120,10);
  radio_playmode_cow = createRadio('Test');
  radio_playmode_cow.position(200, 10);
  addPlayModeOptions(radio_playmode_cow);
}

function addPlayModeOptions(radioElement) {
  radioElement.option('restart');
  radioElement.option('sustain');
}

// function draw() {
//   background(220);
// }

// function mousePressed() {
//   if (song.isPlaying()) {
//     // .isPlaying() returns a boolean
//     song.stop();
//     background(255, 0, 0);
//   } else {
//     song.play();
//     background(0, 255, 0);
//   }
// }

function buttonPressed(sample) {
  if (sample.isPlaying()) {
    // .isPlaying() returns a boolean
    sample.stop();
  } else {
    sample.play();
  }
}
