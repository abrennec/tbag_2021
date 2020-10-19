// This example is based on the following scripts:
// https://p5js.org/examples/sound-load-and-play-sound.html
// 

let sample_cow, sample_glass, sample_slamming;
let button_cow, button_glass, button_slamming;

function setup() {
  // Loading the sound samples
  loadAndSetupSamples();

  // Creating buttons, to play the sound
  setupButtons();
    

  // Create and setup canvas
  //createCanvas(720, 200);
  //background(255, 0, 0);
}

function loadAndSetupSamples() {
  sample_cow = loadSound('assets/58277__benboncan__cow.wav');
  sample_cow.onended(function () { 
    resetBtnStyling(button_cow);
  });
  sample_glass = loadSound('assets/440773__mgamabile__smashing-glass.wav');
  sample_glass.onended(function () { 
    resetBtnStyling(button_glass);
  });

  sample_slamming = loadSound('assets/379924__supercow8399__slamming-on-wooden-desk.mp3');
  sample_slamming.onended(function () { 
    resetBtnStyling(button_slamming);
  });
}

function setupButtons() {
  button_cow = createButton('Cow Sample');
  button_cow.position(10 , 10);
  button_cow.mousePressed(function(){
    buttonPressed(sample_cow, button_cow);
  });

  button_glass = createButton('Glass Sample');
  button_glass.position(10 , 35);
  button_glass.mousePressed(function(){
    buttonPressed(sample_glass, button_glass);
  });

  button_slamming = createButton('Slamming Sample');
  button_slamming.position(10 , 60);
  button_slamming.mousePressed(function(){
    buttonPressed(sample_slamming, button_slamming);
  });
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

function buttonPressed(sample, btn) {
  if (sample.isPlaying()) {
    // .isPlaying() returns a boolean
    sample.stop();
    btn.style('background-color', 'white');
  } else {
    sample.play();
    btn.style('background-color', 'greenyellow');
  }
}

function resetBtnStyling(btn) {
  btn.style('background-color', 'white');
}