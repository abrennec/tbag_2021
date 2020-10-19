// This example is based on the following scripts:
// https://p5js.org/examples/sound-load-and-play-sound.html
// 

let sample_cow, sample_glass, sample_slamming;
let button_cow, button_glass, button_slamming;
let radio_playmode_cow, radio_playmode_glass, radio_playmode_slamming;
let slider_panning_cow, slider_panning_glass, slider_panning_slamming;

function setup() {
  // Loading the sound samples
  loadSamples();

  // Setting up the UI
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
  createSampleButton(button_cow, sample_cow, 'Cow', 10, 10);
  createSampleButton(button_glass, sample_glass, 'Glass', 10, 40);
  createSampleButton(button_slamming, sample_slamming, 'Slamming', 10, 70);

  // Radio buttons for playing mode
  createPlayModeRadioButton(radio_playmode_cow, sample_cow, 120, 10);
  createPlayModeRadioButton(radio_playmode_glass, sample_glass, 120, 40);
  createPlayModeRadioButton(radio_playmode_slamming, sample_slamming, 120, 70);

  // Slider element for panning
  createPanningSlider(slider_panning_cow, sample_cow, 350, 10);
  createPanningSlider(slider_panning_glass, sample_glass, 350, 40);
  createPanningSlider(slider_panning_slamming, sample_slamming, 350, 70);
}

function createSampleButton(btn, sample, label, posX, posY) {
  btn = createButton(label);
  btn.position(posX , posY);

  // When mouse is being pressed (on button), play sample
  btn.mousePressed(function() {
    sample.play();
  });
}

function createPlayModeRadioButton(radioBtn, sample, posX, posY) {
  createSpan('Play Mode: ').position(posX, posY);
  radioBtn = createRadio('radio_' + posY);
  radioBtn.position(posX + 80, posY);
  radioBtn.option('restart');
  radioBtn.option('sustain');
  
  radioBtn.selected('restart');
  sample.playMode(radioBtn.value());

  // When mouse has been clicked (after releasing mouse button), set the play mode
  radioBtn.mouseClicked(function() {
    sample.playMode(radioBtn.value());
  });
}

function createPanningSlider(panningSlider, sample, posX, posY) {
  createSpan('Panning: ').position(posX, posY);
  panningSlider = createSlider(-1, 1, 0, 0);
  panningSlider.position(posX + 60, posY);

   // When mouse has been clicked (after releasing mouse button), set the panning
  panningSlider.mouseClicked(function() {
    sample.pan(panningSlider.value());
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