let soundFile;


function preload() {

    //soundFile = loadSound('assets/glass.wav');
    soundFile = loadSound('assets/cow.wav');
    //soundFile = loadSound('assets/desk.mp3');

    //soundFile.disconnect();
}


function setup() {

  createCanvas(400, 200);
  background(0,0,0);
  soundFile.loop();

  addReverb();
}


function draw() {
  //background(220);

  // Set the volume to a range between 0 and 1.0
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  soundFile.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  soundFile.rate(speed);
}


function mousePressed() {

    if (soundFile.isPlaying()) {
    
        soundFile.stop();
        background(0, 0, 0);
    } 
    else {
        
        soundFile.play();
        background(0, 255, 0);
    }
  }


function addReverb() {

    reverb = new p5.Reverb();

    // connects soundFile to reverb with a
    // reverbTime of 6 seconds, decayRate of 0.2%
    reverb.process(soundFile, 6, 0.2);
  
    reverb.amp(4); // turn it up!
  }