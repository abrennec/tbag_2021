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
  createSampleButton(ui_elements_glass, sample_glass, 'Glass', 10, 125);
  createSampleButton(ui_elements_slamming, sample_slamming, 'Slamming', 10, 240);

  // Radio buttons for playing mode
  createPlayModeRadioButton(ui_elements_cow, sample_cow, 120, 10);
  createPlayModeRadioButton(ui_elements_glass, sample_glass, 120, 125);
  createPlayModeRadioButton(ui_elements_slamming, sample_slamming, 120, 240);

  // Slider element for panning
  createPanningSlider(ui_elements_cow, sample_cow, 350, 10);
  createPanningSlider(ui_elements_glass, sample_glass, 350, 125);
  createPanningSlider(ui_elements_slamming, sample_slamming, 350, 240);

  // Reverb configuration elements
  createReverbOption(ui_elements_cow, sample_cow, audio_fx_cow, 120, 45);
  createReverbOption(ui_elements_glass, sample_glass, audio_fx_glass, 120, 160);
  createReverbOption(ui_elements_slamming, sample_slamming, audio_fx_slamming, 120, 275);

  // Delay configuration elements
  createDelayOption(ui_elements_cow, sample_cow, audio_fx_cow, 120, 80);
  createDelayOption(ui_elements_glass, sample_glass, audio_fx_glass, 120, 195);
  createDelayOption(ui_elements_slamming, sample_slamming, audio_fx_slamming, 120, 310);

  // Create line separators
  createElement('hr').position(0, 105).style('width', '100%');
  createElement('hr').position(0, 220).style('width', '100%');
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
      //removeReverb(sample, audio_fx);
      rearrangeAudioConnections(sample, audio_fx, 'reverb');
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

  // Use change listener on input to directly change settings on reverb
  ui_elements.reverbTimeInput.changed(function () {
    setReverbSettings(audio_fx, ui_elements.reverbTimeInput.value(), ui_elements.reverbDecayInput.value());
  });
  ui_elements.reverbDecayInput.changed(function () {
    setReverbSettings(audio_fx, ui_elements.reverbTimeInput.value(), ui_elements.reverbDecayInput.value());
  });
}

function addReverb(sample, audio_fx, reverbTime, decayRate) {
  audio_fx.reverb = new p5.Reverb();
  sample.disconnect();
  audio_fx.reverb.process(sample, reverbTime, decayRate);
}

function setReverbSettings(audio_fx, reverbTime, decayRate) {
  if ('reverb' in audio_fx) {
    audio_fx.reverb.set(reverbTime, decayRate);
  }
}

function createDelayOption(ui_elements, sample, audio_fx, posX, posY) {
  createSpan('Delay:').position(posX, posY);

  ui_elements.delayCheckbox = createCheckbox(false);
  ui_elements.delayCheckbox.position(posX + 45, posY);

  // when checkbox state changes, add or remove reverb
  ui_elements.delayCheckbox.changed(function () { 
    if (ui_elements.delayCheckbox.checked()) {
      addDelay(sample, audio_fx, ui_elements.delayTimeInput.value(), ui_elements.delayFeedbackInput.value(), ui_elements.delayFilterFreqInput.value());
    } else {
      //removeDelay(sample, audio_fx);
      rearrangeAudioConnections(sample, audio_fx, 'delay');
    }
  });

  createSpan('Delay Time (0 - 1):').position(posX + 70, posY);
  ui_elements.delayTimeInput = createInput('0.0', 'number');
  ui_elements.delayTimeInput.position(posX + 200, posY);
  ui_elements.delayTimeInput.style('width', '40px');
  ui_elements.delayTimeInput.attribute('step', '0.01');

  createSpan('Feedback (0 - 1):').position(posX + 260, posY);
  ui_elements.delayFeedbackInput = createInput('0.0', 'number');
  ui_elements.delayFeedbackInput.position(posX + 375, posY);
  ui_elements.delayFeedbackInput.style('width', '40px');
  ui_elements.delayFeedbackInput.attribute('step', '0.01');

  createSpan('Filter Frequency:').position(posX + 430, posY);
  ui_elements.delayFilterFreqInput = createInput('0', 'number');
  ui_elements.delayFilterFreqInput.position(posX + 550, posY);
  ui_elements.delayFilterFreqInput.style('width', '40px');
  ui_elements.delayFilterFreqInput.attribute('step', '1');

  ui_elements.delayTimeInput.changed(function () {
    setDelaySettings(audio_fx, ui_elements.delayTimeInput.value(), ui_elements.delayFeedbackInput.value(), ui_elements.delayFilterFreqInput.value());
  });
  ui_elements.delayFeedbackInput.changed(function () {
    setDelaySettings(audio_fx, ui_elements.delayTimeInput.value(), ui_elements.delayFeedbackInput.value(), ui_elements.delayFilterFreqInput.value());
  });
  ui_elements.delayFilterFreqInput.changed(function () {
    setDelaySettings(audio_fx, ui_elements.delayTimeInput.value(), ui_elements.delayFeedbackInput.value(), ui_elements.delayFilterFreqInput.value());
  });
}

function addDelay(sample, audio_fx, delayTime, feedback, filterFreq) {
  sample.disconnect();
  audio_fx.delay = new p5.Delay();
  audio_fx.delay.process(sample, parseFloat(delayTime), parseFloat(feedback), parseFloat(filterFreq));
}

function setDelaySettings(audio_fx, delayTime, feedback, filterFreq) {
  if ('delay' in audio_fx) {
    audio_fx.delay.delayTime(parseFloat(delayTime));
    audio_fx.delay.feedback(parseFloat(feedback));
    audio_fx.delay.filter(parseFloat(filterFreq));
  }
}

function rearrangeAudioConnections(sample, audio_fx, effectNameToDisconnect) {
  audio_fx[effectNameToDisconnect].disconnect();
  delete audio_fx[effectNameToDisconnect];
  sample.disconnect();

  let lastProperty;
  for (const property in audio_fx) {
    if (lastProperty) {
      audio_fx[property].connect(audio_fx[lastProperty]);
    }
    lastProperty = property;
  }
  if (lastProperty) {
    sample.connect(audio_fx[lastProperty]);
  } else {
    sample.connect();
  }
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