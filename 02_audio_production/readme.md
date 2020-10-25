<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Audio Production -- In the Mix and Sound Production](#audio-production----in-the-mix-and-sound-production)
  - [Topics](#topics)
  - [Learning Objectives](#learning-objectives)
- [Learning Objectives](#learning-objectives-1)
- [Sound and Audio Basics](#sound-and-audio-basics)
  - [Digital Audio Fundamentals](#digital-audio-fundamentals)
    - [Digital Audio](#digital-audio)
  - [digital 2](#digital-2)
    - [Sampling](#sampling)
    - [Quantization](#quantization)
  - [Audio Editing Software](#audio-editing-software)
- [Digital Audio Signals](#digital-audio-signals)
    - [Audio Buffers](#audio-buffers)
- [Homework Assignment](#homework-assignment)
  - [Reaper and Musique Concrète](#reaper-and-musique-concrète)
    - [Get started](#get-started)
    - [Topics](#topics-1)
    - [Resources](#resources)
    - [Editing](#editing)

---

   1. Digital audio
   2. Stereo soundscape
   3. Dynamics and panning
   4. Audio FX

# Audio Production -- In the Mix and Sound Production 

## Topics

- Digital Audio Workstation
- Tracks, instruments, and Plugins
- Basics of Mixing 
- Dynamics and panning (sound space basics)
- Audio FX (Reverb, delay, equalizer)
- Exercise and applications: production

## Learning Objectives

Now that students know about the basics of sound and audio they will learn how to process audio.

- Students will learn about audio signal processing, i.e., theory behind audio signals and signal flow.
- Students will learn about how recorded audio signals will be routed and mixed in a digital audio workstation (DAW).
- Students will learn about how audio tracks can be further processed using audio effects (FX).
- Students will learn how to create an audio mix and how to position their sound sources in a stereo mix.

4) **Introduction to Reaper**: We will learn about a digital audio workstation, Reaper, which will be used in this lecture.

# Learning Objectives

To understand 

- what is meant by audio rendering,
- what is sound and what are its properites,
- how hearing works,
- what is audio technology,
- how sound is processed digitally, and
- how to work with sound in a computer.

---

# Sound and Audio Basics

In this lecture we will start our journey into the theoretical backgrounds of digital audio software applications from different perspectives:


1) **Digital audio fundemantals**: We will look into the digital concepts and techniques that allow us to work with sound in a computer so that you can create your own sounds and get an understanding of how digital audio technology addresses the properties of sound.
2) **Audio editing software**: We will finally introduce different types of audio editing software in order to pick up on the theory with practical exercises.


<!-- ## Audio Signal -->
<!-- 
Overview of audio rendering process
- analog vs digital audio signal
- basics of signal flow
- audio interfaces (I/O)
- audio processing
- audio devices -->
<!-- 
refers to audio signals & the (electronic) representation of sound i.e., in the contexts of sound capture, processing, reproduction

Signal represents a quantity that varies over time
Audio signal is a representation of sound 
audio signals can be represented electronically in analog & digital formats as continuous and discrete signals
digital processors operate mathematically on the binary representations of the signal
digital audio expresses the pressure waveform as a binary number -->


--- 

## Digital Audio Fundamentals

### Digital Audio

Sound waves are digitized using an audio-to-digital-converter (adc) that is part of the sound card/audio interface (device) and converted back using an digital-to-analog-converter (dac). Driver APIs provide a programming interface that tells the operating system (or the audio application directly) how to exchange audio data with the audio interface. Audio APIs introduce another layer of abstraction: They provide a programming interface across all operating systems (platforms) & are generally used by application developers.

Audio signals can be represented electronically in
analog formats: analog processors operate directly on the voltage level of the analog signal (continuous function)
digital formats: digital processors operate mathematically on the binary representations of the digital signal (discrete function)

Digital - Everything can be represented as a finite integer number

## digital 2

Digital audio and digital audio technology usually describes the process of record, store, generate, manipulate, and reproduce sound using audio signals that have been encoded in digital form.
what is a digital audio signal?
microphone converts sound into analog electrical signal then an ADC converts it to a digital signal then you can manipulate it (record, store, edit, modify) with digital audio tools then convert it back to analog with DAC 
Reproduction/Rendering Audio - Stereophony, 3D Audio, Binaural Audio

A transducer converts one form of energy in another
mechanical energy turns into electrical energy through a microphone (diaphragm oscillates), loudspeakers convert electrical energy back in sound
Audio refers to capture, storage & reproduction of sound
Audio equipment represents changing air pressure of sound with changing electrical voltage inside the components
Acoustical systems can be accessed with transducers, devices that change energy from one form to another 
kettledrum changes mechanical energy into acoustical energy; a microphone responds by producing electrical energy or a loudspeaker that produces acoustical energy from electrical energy

### Sampling 

Quantization - mapping the codomain of a sampling function to a set of integer numbers
Noise (made by devices, etc.) cannot be eliminated; thus, quantization is always imprecise due to the existing noise
Digital signal processing works with countable sequences of integers so that no noise is introduced -> example is reproduction and mp3
The amplitude accuracy of a set of samples is entirely dependent on the processing HW indicated by the number of bits per sample, i.e., CD with 16 bits per sample, DVD with 24 bits per sample 

### Quantization


## Audio Editing Software

Audacity

Sonic Visualizer

Reaper 


# Digital Audio Signals

Signal represents a quantity that varies over time
Audio signal is a representation of sound 
audio signals can be represented electronically in analog & digital formats as continuous and discrete signals
digital processors operate mathematically on the binary representations of the signal
digital audio expresses the pressure waveform as a binary number

Signal - A formal description of a phenomenon evolving over time and space (1D - Sound, 2D - Image, 3D -Movie)
Signal processing - An operation that modifies, analyzes, changes the information contained in a signal
Operates on an abstract representation of a physical quantity not on the quantity itself
Digital - Everything can be represented as a finite integer number


### Audio Buffers


--- 

# Homework Assignment 


**You can work on this task in a group or on your own!**

## Reaper and Musique Concrète

### Get started 

This task will kick-off the first small term project. Your task will be to create one song in the style of musique conrète. To get an idea of where or how to start, check out this video: 

- [Recipe for Musique Conrète](https://www.youtube.com/watch?v=2ZpwbXDleDw)



One goal of this task is that you play around with the different audio applications on your own and try to figure out how they work and what you can do with them. Note down your findings, questions, and learnings in the Github Wiki so that everyone can learn and contribute.

The next goal is that you conduct an audio rendering and work on a piece of musique concrète. Think about one topic or scenery that interests you or that you detest. Try to come up with an auditive sound scene that you would like to create. 

- Pick a mobile recorder or your mobile phone and record some sounds, i.e., create field-recordings, or go to [freesound.org](https://freesound.org) to search for royalty free sounds that fit your idea.
- Load the recorded sounds into Audacity or Reaper and edit the recordings, try to identify interesting sounding parts, cut out parts that you do not like.
- Cut, copy, and paste the recordings and play them back forward and backwards to create and interesting track.



### Topics

First of all you may need a certain topic or source of inspiration that will serve as a basis for your composition.
You might alway want to ask yourselves these two questions when considering a specific theme:

- What does this topic sound like? 
- What kind of sounds would let me interpret this topic in the form of musique concrète?

The following topics are simply suggestions; feel free to come up with an individual topic.

- Your apartment
- Outer space
- City slickers
- Natural boundaries
- Stillness
- Fear
- Covid 19
- ...

### Resources

You can either use your mobile phone to record short sound samples, you can checkout this [sample folder](https://owncloud.gwdg.de/index.php/s/Vjfs9uYJEz5qoHV) that contains a preselection of freesound.org samples useful for creating a musique conrète, or you can go to [freesound.org ](https://freesound.org) and search for samples that you would like to integrate.

### Editing 

Make sure that you limit the number of samples to 3-5 different samples and work with them, which means:

- Start and run Reaper
- Create a new track
- Import your samples
- Edit the samples, for example, by
  - chopping off the beginning or the end
  - reversing the sample
  - shortening it
- Save the project
- Export and/or render the song into one final sound file (wav, or mp3)

Simply play around with the samples in Reaper and make use of as many Reaper tutorials and functionalities that work for you. 
