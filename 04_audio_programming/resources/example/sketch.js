// This example is based on the following scripts:
// https://p5js.org/examples/sound-load-and-play-sound.html
// 

let 
  sample_cow, sample_glass, sample_slamming,
  ui_elements_cow = {}, ui_elements_glass  = {}, ui_elements_slamming  = {},
  audio_fx_cow = {}, audio_fx_glass = {}, audio_fx_slamming = {}
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
  createSampleButton(ui_elements_cow, sample_cow, 'Cow', 10, 10);
  createSampleButton(ui_elements_glass, sample_glass, 'Glass', 10, 110);
  createSampleButton(ui_elements_slamming, sample_slamming, 'Slamming', 10, 210);

  // Radio buttons for playing mode
  createPlayModeRadioButton(ui_elements_cow, sample_cow, 120, 10);
  createPlayModeRadioButton(ui_elements_glass, sample_glass, 120, 110);
  createPlayModeRadioButton(ui_elements_slamming, sample_slamming, 120, 210);

  // Slider element for panning
  createPanningSlider(ui_elements_cow, sample_cow, 350, 10);
  createPanningSlider(ui_elements_glass, sample_glass, 350, 110);
  createPanningSlider(ui_elements_slamming, sample_slamming, 350, 210);

  // Reverb configuration elements
  createReverbOption(ui_elements_cow, sample_cow, audio_fx_cow, 120, 40);
  createReverbOption(ui_elements_glass, sample_glass, audio_fx_glass, 120, 140);
  createReverbOption(ui_elements_slamming, sample_slamming, audio_fx_slamming, 120, 240);

  // Delay configuration elements
  createDelayOption(ui_elements_cow, sample_cow, audio_fx_cow, 120, 70);

  // Create line separators
  createElement('hr').position(0, 90).style('width', '100%');
  createElement('hr').position(0, 190).style('width', '100%');
}

function createSampleButton(ui_elements, sample, label, posX, posY) {
  ui_elements.sampleBtn = createButton(label);
  ui_elements.sampleBtn.position(posX , posY);

  // When mouse is being pressed (on button), play sample
  ui_elements.sampleBtn.mousePressed(function() {
    sample.play();
  });
}

function createPlayModeRadioButton(ui_elements, sample, posX, posY) {
  createSpan('Play Mode: ').position(posX, posY);
  ui_elements.playModeRadioButton = createRadio('radio_' + posY);
  ui_elements.playModeRadioButton.position(posX + 80, posY);
  ui_elements.playModeRadioButton.option('restart');
  ui_elements.playModeRadioButton.option('sustain');
  
  ui_elements.playModeRadioButton.selected('restart');
  sample.playMode(ui_elements.playModeRadioButton.value());

  // When mouse has been clicked (after releasing mouse button), set the play mode
  ui_elements.playModeRadioButton.mouseClicked(function() {
    sample.playMode(ui_elements.playModeRadioButton.value());
  });
}

function createPanningSlider(ui_elements, sample, posX, posY) {
  createSpan('Panning: ').position(posX, posY);
  ui_elements.panningSlider = createSlider(-1, 1, 0, 0);
  ui_elements.panningSlider.position(posX + 60, posY);

   // When mouse has been clicked (after releasing mouse button), set the panning
   ui_elements.panningSlider.mouseClicked(function() {
    sample.pan(ui_elements.panningSlider.value());
  });
}

function createReverbOption(ui_elements, sample, audio_fx, posX, posY) {
  createSpan('Reverb:').position(posX, posY);

  ui_elements.reverbCheckbox = createCheckbox(false);
  ui_elements.reverbCheckbox.position(posX + 50, posY);

  // when checkbox state changes, add or remove reverb
  ui_elements.reverbCheckbox.changed(function () { 
    if (ui_elements.reverbCheckbox.checked()) {
      addReverb(sample, audio_fx, ui_elements.reverbTimeInput.value(), ui_elements.reverbDecayInput.value());
    } else {
      removeReverb(sample, audio_fx);
    }
  });

  createSpan('Reverb Time (s):').position(posX + 75, posY);
  ui_elements.reverbTimeInput = createInput('0.0', 'number');
  ui_elements.reverbTimeInput.position(posX + 190, posY);
  ui_elements.reverbTimeInput.style('width', '40px');
  ui_elements.reverbTimeInput.attribute('step', '0.01');

  createSpan('Decay rate:').position(posX + 245, posY);
  ui_elements.reverbDecayInput = createInput('0.0', 'number');
  ui_elements.reverbDecayInput .position(posX + 325, posY);
  ui_elements.reverbDecayInput .style('width', '40px');
  ui_elements.reverbDecayInput.attribute('step', '0.01');
}

function addReverb(sample, audio_fx, reverbTime, decayRate) {
  console.log(reverbTime, decayRate);
  audio_fx.reverb = new p5.Reverb();
  sample.disconnect();
  audio_fx.reverb.process(sample, reverbTime, decayRate); // TODO: directly access ui elements?
}

function removeReverb(sample, audio_fx) {
  sample.connect(); // without parameter, will connect to master output
  audio_fx.reverb.disconnect();
}

function createDelayOption(ui_elements, sample, audio_fx, posX, posY) {
  createSpan('Delay:').position(posX, posY);

  ui_elements.delayCheckbox = createCheckbox(false);
  ui_elements.delayCheckbox.position(posX + 45, posY);

  // when checkbox state changes, add or remove reverb
  ui_elements.delayCheckbox.changed(function () { 
    if (ui_elements.delayCheckbox.checked()) {
    } else {
    }
  });
}

function addDelay(sample, audio_fx, delayType, filterFreq, filterRes, delTime) {

}

function removeDelay(sample, audio_fx) {

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