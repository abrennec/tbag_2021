<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Audio Production -- Learning Objectives](#audio-production----learning-objectives)
- [Digital Audio and Signal Path](#digital-audio-and-signal-path)
  - [Lecture Video](#lecture-video)
    - [Exercise - Digital Audio](#exercise---digital-audio)
  - [Digital Audio](#digital-audio)
  - [Digitization](#digitization)
    - [Sampling](#sampling)
    - [Quantization](#quantization)
  - [Digital Audio Signals](#digital-audio-signals)
  - [Audio Editing Software](#audio-editing-software)
    - [Reaper DAW](#reaper-daw)
- [Audio Production](#audio-production)
- [Spatial Audio in Stereo](#spatial-audio-in-stereo)
- [Dynamics, Panning, and Audio FX](#dynamics-panning-and-audio-fx)
- [Homework Assignment](#homework-assignment)
  - [Reaper and Musique Concrète](#reaper-and-musique-concrète)
    - [Get started](#get-started)
    - [Topics](#topics)
    - [Resources](#resources)
    - [Editing](#editing)

---


# Audio Production -- Learning Objectives

**What?**

In this lecture, we will cover the following topics in order to understand what an audio production is generally comprised of and how it is conducted:

- Digital audio and signal flow
- Production steps and process
- Spatial audio in stereo
- Dynamics and audio FX

**Why?**

1) **Digital audio and signal path**: Since we are working with a computer, we first need to learn about what a "virtual sound scene" (see audio rendering from the previous section) actually looks like in terms of data files and digital signal processing. Hence, in the first part we will learn about how analog sound waves are actually represented in computer and what kind of infrastructure is needed to process them, for example, in a DAW.
2) **Production steps and process**: Next, we will look into the general steps and processes that are involved in an audio production and will particularly focus on the mixing process.
3) **Spatial audio in stereo**: One central goal of (m)any audio production is to create a spatial audio image -- at least to some extent. Stereo images are the most common way to approach spatial audio and the mixing process is targetting how to locate the different tracks (or audio objects) in the stereo image as well as how to best steer the listener's attention.
4) **Dynamics, panning, and audio FX**: Another central goal of (m)any audio productions is to direct the attention of the listener. Changing the dynamics or panning of the tracks is a common approach as well as adding audio FX plugins to the production.

---

# Digital Audio and Signal Path

- Digital audio signal 

- digitization 
  - sampling 
  - quantization

- signal path
  - audio interface
  - audio driver
  - operating system
  - audio programming sdk
  - audio application

Audio signals can be represented electronically in analog formats: analog processors operate directly on the voltage level of the analog signal (continuous function)

Digital formats: digital processors operate mathematically on the binary representations of the digital signal (discrete function)

Digital - Everything can be represented as a finite integer number

## Lecture Video

Please checkout the following lecture video to learn about the above mentioned terms and how they are related:

```diff
- To be updated
```
- [Link to video]()
- ~ XXX mins

![screencast](imgs/screencast.png)

You can find the accompanying slides in the **resources** folder. 

### Exercise - Digital Audio


## Digital Audio

Sound waves are digitized using an audio-to-digital-converter (adc) that is part of the sound card/audio interface (device) and converted back using an digital-to-analog-converter (dac). Driver APIs provide a programming interface that tells the operating system (or the audio application directly) how to exchange audio data with the audio interface. Audio APIs introduce another layer of abstraction: They provide a programming interface across all operating systems (platforms) & are generally used by application developers.

## Digitization

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

### Quantization


Quantization - mapping the codomain of a sampling function to a set of integer numbers
Noise (made by devices, etc.) cannot be eliminated; thus, quantization is always imprecise due to the existing noise
Digital signal processing works with countable sequences of integers so that no noise is introduced -> example is reproduction and mp3
The amplitude accuracy of a set of samples is entirely dependent on the processing HW indicated by the number of bits per sample, i.e., CD with 16 bits per sample, DVD with 24 bits per sample 

## Digital Audio Signals

Signal represents a quantity that varies over time
Audio signal is a representation of sound 
audio signals can be represented electronically in analog & digital formats as continuous and discrete signals
digital processors operate mathematically on the binary representations of the signal
digital audio expresses the pressure waveform as a binary number

Signal - A formal description of a phenomenon evolving over time and space (1D - Sound, 2D - Image, 3D -Movie)
Signal processing - An operation that modifies, analyzes, changes the information contained in a signal
Operates on an abstract representation of a physical quantity not on the quantity itself
Digital - Everything can be represented as a finite integer number



## Audio Editing Software

Audacity

Sonic Visualizer

Reaper 

- Checkout the following sections from the digitalsoundandmusic.com book's [Section 5.1](http://digitalsoundandmusic.com/chapters/ch5/5-1/) for additional details.


### Reaper DAW

In the next session, you will start working with a digital audio workstation (DAW), Reaper, that we will use during this lecture. 

Please download and install Reaper. You can use it freely for 30 days and might continue the evaluation process thereafter unless you would like to get a licence. Please get in touch with your tutor in that case.

- [Reaper website](https://www.reaper.fm/index.php)
- [Download Reaper Link](https://www.reaper.fm/download.php)

To get started with Reaper, for example, checkout the first 30 minutes of this tutorial by Hop Pole Studios on Youtube:

- [Hop Pole Studio: Reaper DAW 101: The Basics Part 1](https://www.youtube.com/watch?v=JwDcTPn2dvc)
- Try to load music into reaper and get used to playing it back and forth using the software 

To get a good understanding of the software, checkout the [Reaper user guide](https://www.reaper.fm/userguide.php) and the additional material and tutorial resource provided via the website.


# Audio Production 

An audio production commonly refers to the process of creating an audio product (usually an audio file or a set of audio files) ready for playback on a dedicated playback system, in many cases this would be a stereo system. This process is usually comprised of several steps such as

- pre-production
- recording
- editing
- mixing different audio tracks 
- processing and FX
- rendering
- post-production and mastering



# Spatial Audio in Stereo



# Dynamics, Panning, and Audio FX

Practical lesson.

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
