// This example is based on the following scripts:
// https://p5js.org/examples/sound-load-and-play-sound.html
// https://p5js.org/examples/sound-play-mode.html
// https://p5js.org/examples/sound-pan-sound.html
// https://p5js.org/examples/sound-reverb.html
// https://p5js.org/examples/sound-delay.html
// https://p5js.org/examples/sound-record-save-audio.html

let 
  sample_cow, sample_glass, sample_slamming,
  ui_elements_cow = {}, ui_elements_glass  = {}, ui_elements_slamming  = {},
  audio_fx_cow = {}, audio_fx_glass = {}, audio_fx_slamming = {},
  sample_recordings = [], ui_elements_recordings = [], audio_fx_recordings  = [], button_recording,  isRecording = false
  ;

function setup() {
  // Setting up the UI
  setupUI();
  
  initSoundRecorder();
}

function setupUI() {
  // Button to record audio from microphone
  button_recording = createButton('Start/Stop recording');
  button_recording.position(10, 5);
  button_recording.style('background-color', 'white');
  button_recording.mousePressed(recordingBtnPressed);

  // Create line separators
  createElement('hr').position(0, 20);
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
  audio_fx.reverb.set(reverbTime, decayRate);
  //sample.disconnect();
  //audio_fx.reverb.process(sample, reverbTime, decayRate);
  rearrangeAudioConnections(sample, audio_fx);
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

  // when checkbox state changes, add or remove delay
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
  //audio_fx.delay.process(sample, parseFloat(delayTime), parseFloat(feedback), parseFloat(filterFreq));
  setDelaySettings(audio_fx, delayTime, feedback, filterFreq);

  rearrangeAudioConnections(sample, audio_fx);
}

function setDelaySettings(audio_fx, delayTime, feedback, filterFreq) {
  if ('delay' in audio_fx) {
    audio_fx.delay.delayTime(parseFloat(delayTime));
    audio_fx.delay.feedback(parseFloat(feedback));
    audio_fx.delay.filter(parseFloat(filterFreq));
  }
}

function rearrangeAudioConnections(sample, audio_fx, effectNameToDisconnect) {
  if (effectNameToDisconnect) {
    audio_fx[effectNameToDisconnect].disconnect();
    delete audio_fx[effectNameToDisconnect];
    sample.disconnect();
  }
  
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

function initSoundRecorder() {
  // create an audio in
  audioInput = new p5.AudioIn();
  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // users must manually enable their browser microphone for recording to work properly!
  audioInput.start();

  // connect the mic to the recorder
  recorder.setInput(audioInput);
}

function recordingBtnPressed() {
  if (!isRecording) {
    isRecording = true;
    button_recording.style('background-color', 'lightcoral');
    startRecording();
  } else {
    isRecording = false;
    button_recording.style('background-color', 'white');
    stopRecording();
  }
}

function startRecording() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (audioInput.enabled) {
    // create an empty sound file that we will use to playback the recording
    sample_recordings.push(new p5.SoundFile());

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    console.log(sample_recordings.length - 1);
    recorder.record(sample_recordings[sample_recordings.length - 1]);
  }
}

function stopRecording() {
  // stop recorder, and send the result to soundFile
  recorder.stop();

  // adding the ui elements for the recording sample
  addRecordingSampleUiElements();
}

function addRecordingSampleUiElements() {
  const recordingIndex = sample_recordings.length - 1;
  const baseYpos = 40 + (sample_recordings.length - 1) * 115;

  ui_elements_recordings[recordingIndex] = {};
  audio_fx_recordings[recordingIndex] = {};

  createSampleButton(ui_elements_recordings[recordingIndex], sample_recordings[recordingIndex], 'Recording #' + recordingIndex, 10, baseYpos);
  createPlayModeRadioButton(ui_elements_recordings[recordingIndex], sample_recordings[recordingIndex], 120, baseYpos); // Radio buttons for playing mode 
  createPanningSlider(ui_elements_recordings[recordingIndex], sample_recordings[recordingIndex], 350, baseYpos);
  createReverbOption(ui_elements_recordings[recordingIndex], sample_recordings[recordingIndex], audio_fx_recordings[recordingIndex], 120, baseYpos + 35);
  createDelayOption(ui_elements_recordings[recordingIndex], sample_recordings[recordingIndex], audio_fx_recordings[recordingIndex], 120, baseYpos + 70);
  createElement('hr').position(0, baseYpos + 95);
}

function getBaseYPosition() {
  const baseYpos = 385 + (sample_recordings.length + oscillators.length - 1) * 115;
  return baseYpos;
}