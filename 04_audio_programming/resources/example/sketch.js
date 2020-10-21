// This example is based on the following scripts:
// https://p5js.org/examples/sound-load-and-play-sound.html
// 

let 
  sample_cow, sample_glass, sample_slamming,
  button_cow, button_glass, button_slamming,
  radio_playmode_cow, radio_playmode_glass, radio_playmode_slamming,
  slider_panning_cow, slider_panning_glass, slider_panning_slamming,
  checkbox_reverb_cow, checkbox_reverb_glass, checkbox_reverb_slamming, 
  input_reverbTime_cow, input_reverbTime_glass, input_reverbTime_slamming,
  input_decayRate_cow, input_decayRate_glass, input_decayRate_slamming,
  reverb_cow, reverb_glass, reverb_slamming
  ;

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

  createReverbOption(checkbox_reverb_cow, input_reverbTime_cow, input_decayRate_cow, sample_cow, reverb_cow, 570, 10);
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

function createReverbOption(revCheckb, revTimeInput, revDecayInput, sample, reverb, posX, posY) {
  reverb = new p5.Reverb();
  
  createSpan('Reverb:').position(posX, posY);

  revCheckb = createCheckbox(false);
  revCheckb.position(posX + 50, posY);

  // when checkbox state changes, add or remove reverb
  revCheckb.changed(function () { 
    if (revCheckb.checked()) {
      addReverb(sample, reverb, revTimeInput.value(), revDecayInput.value());
    } else {
      console.log("changed: ", sample, reverb);
      removeReverb(sample, reverb);
    }
  });

  createSpan('Reverb Time (s):').position(posX + 75, posY);
  revTimeInput = createInput('0.0', 'number');
  revTimeInput.position(posX + 190, posY);
  revTimeInput.style('width', '40px');

  createSpan('Decay rate:').position(posX + 245, posY);
  revDecayInput = createInput('0.0', 'number');
  revDecayInput.position(posX + 325, posY);
  revDecayInput.style('width', '40px');
}

function addReverb(sample, reverb, reverbTime, decayRate) {
  sample.disconnect();
  reverb.process(sample, reverbTime, decayRate);
  //reverb.amp(4);
  console.log("added Reverb: ", reverb, reverbTime, decayRate);
}

function removeReverb(sample, reverb) {
  console.log(reverb);
  sample.connect(); // without parameter, will connect to master output
  reverb.disconnect();
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