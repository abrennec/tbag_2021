<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Learning Objectives](#learning-objectives)
- [Sound and Audio Basics](#sound-and-audio-basics)
  - [Audio Rendering Techniques](#audio-rendering-techniques)
    - [Video](#video)
    - [Questions and Todos](#questions-and-todos)
  - [Properties of Sound](#properties-of-sound)
    - [Video](#video-1)
    - [Physical Aspects of Sound](#physical-aspects-of-sound)
      - [Sound Wave Properties](#sound-wave-properties)
    - [Psychophysical Aspects of Sound](#psychophysical-aspects-of-sound)
    - [Hearing and Acoustics](#hearing-and-acoustics)
    - [Questions and Todos](#questions-and-todos-1)
    - [Further Reading and Materials](#further-reading-and-materials)
  - [Digital Audio Fundamentals](#digital-audio-fundamentals)
    - [Digital Audio](#digital-audio)
  - [digital 2](#digital-2)
    - [Sampling](#sampling)
    - [Quantization](#quantization)
  - [Audio Editing Software](#audio-editing-software)
- [Further Reading](#further-reading)
- [Assignment 1](#assignment-1)
  - [Musique Concrète 1/2](#musique-concrète-12)

---

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

1) **Audio rendering**: We will look into common audio rendering approaches so that you get a general understanding and overview of what is actually meant by audio rendering and how it is basically conducted.
2) **Properties of sound**: We will look into the complex phenomenon called *sound* and its physical and psychophysical properties so that you get an understanding of how sound creation, propagation, and perception works and what that means for rendering and processing audio digitally.
3) **Digital audio fundemantals**: We will look into the digital concepts and techniques that allow us to work with sound in a computer so that you can create your own sounds and get an understanding of how digital audio technology addresses the properties of sound.
4) **Audio editing software**: We will finally introduce different types of audio editing software in order to pick up on the theory with practical exercises.


## Audio Rendering Techniques

Audio rendering is a term commonly used in the context of digital sound reproduction with a special focus on the rendering process itself. In general, audio rendering targets the processing and mixing together of one ore more **sound sources** (for example, musical instruments, vocals, guitars, drums, etc.) such that an **audio image** or **soundscape** is created ready to be played back on a (specific) set of loudspeakers or headphones, the **output devices**. 

### Video

To get an overview of audio rendering check out the accompanying video presentation:

```diff
- To be updated
```
- Link to Audio Rendering video

![screencast](imgs/screencast.png)


Make sure that you take notes during the video presentation so that you can answer the questions in the following section.

### Questions and Todos

- What is meant by audio rendering in general?
- What are the different audio rendering approaches? 
- *Sound reproduction* or *audio rendering*, how do you think does the meaning or intention of the terms differ?
- With this basic knowledge of the audio rendering process, try to draw a simple diagram that incorporates the following terms:
  - input source
  - output device
  - processing unit
  - analog to digital conversion
  - digital to analog conversion

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


## Properties of Sound

```
“If a tree falls in the forest and no one is near, does it make any sound?“ 
```

This quote is pointing to the essence of what sound is: 
Sound is a complex physical (acoustic) and psychophysical (cognitive) phenomenon that involves an understanding of physics as well as of the human perception and sensation. Without the physical aspects of sound, we could probably not be able to hear a sound. But without our hearing capabilities and our psychophysical interpretation of sound, we would also not be able to hear or perceive it. 

Hence, in order to understand what sound is and how sound can be worked with later on, we first need to learn about the following aspects of sound:

1) Sound generation
2) Sound propagation
3) Sound perception

In particular, sound generation and sound propagation is determined by the world of physics and can be well described physically, whereas sound perception is especially a psychophysical process, which is also determined by the individual human constitution and anatomy.

### Video

Please check out the accompanying slides and video presentation:

```diff
- To be updated
```
- Link to the Properties of Sound video

![screencast](imgs/screencast.png)


### Physical Aspects of Sound

In a physical sense, sound is a **pressure wave** that transmits **energy** through an **elastic medium** like air or water. When this wave (or energy) reaches the human ear, it is translated into electrochemical impulses that, when sent to and processed by the brain, are perceived as sound. 

```
Not all pressure waves can be processed by the human
brain as sound. Only the waves that are
within the **human hearing range** will be referred
to as **sound waves**. 
```

The pressure wave is the result of a **mechanical disturbance** in the medium. Hence, to generate sound, a disturbance or **vibration** is required. This vibration might be caused by any kind of **vibrating object** like, for instance, a vibrating speaker membrane, a tuning fork, a drum beat, a slammed door, a guitar strings, or simply an oscillating air particle, to name a few. 

When the direction of the vibration that creates the wave is equal to the direction of the wave propagation, we are talking about a **longitudinal wave**. This happens, for instance, when sound travels through the air caused by a vibrating speaker membrane: 

![longitudinal wave](imgs/)

In contrast, when the direction of vibration that creates the wave is perpendicular to the direction of the wave propagation, we are talking about a **transversal wave**. This happes, for instance, when a stone falls into the water or a rope or string vibrates:

![traversal wave](imgs/)

In any way, a vibrating object is required to cause a mechanical disturbance inside of a medium so that the resulting energy can start traveling through it. If that energy can be picked up and processed by the human hearing organ and brain, i.e., lies within the human hearing range, we are talking about a **sound wave**.

#### Sound Wave Properties

Sound waves can be expressed as a function of pressure change (the alternating sequence of compression and rarefaction) against position or time:

![sound wave representation](imgs/)

Central measurable properties of a sound wave are

- **Amplitude A** describes the strengths of the air pressure changes and represents the maximum magnitude or distance of displacement from the equilibrium to the maximal compression or rarefaction. 
- **Frequency f** describes the rate at which the air pressure changes from compression to rarefaction per second. It is measured as **number of cycles per second** in  where **one cycle** is one sequence of an oscillation from equilibrium to pressure compression to rarefaction and back to equilibrium.
- **Period T** describes the time in seconds s it takes for one entire cycle to execute. Period and frequency are inversely related by f = 1 / T.


<!-- #### Reflection and Refraction -->



### Psychophysical Aspects of Sound

In a psychophysical or cognitive sense, sound is a **perception** inside the mind of the listener. A sensation stimulated in the organs of hearing caused by the vibrating eardrum & interpreted by the brain as an audible sound.

When a sound wave reaches the eardrum, it causes the eardrum to vibrate. This stimulation propagates in, that a sensation is stimulated in the organs of hearing which is caused by the vibrating eardrum  interpreted by the brain as an audible sound.

Audio refers to an audible sound i.e., the frequency range of human hearing


### Hearing and Acoustics

Anything that we perceive about the physical world
Loudness is our perception of the Power or Intensity of a sound, closely related to the Amplitude of a sound
In digital signal: loudness is computed by adding up the squares of the digital samples
If we want to know the power of a segment of audio we add up the squares of the the samples and devide by the amount of samples

Sounds interact via the eardrum with the rest of the auditory system
Eardrums work like a transducer — transform one form of energy/information into another

Human hearing (and thus what we refer to as sound) is around 20Hz to 20kHz 

Amplitude A is perceived as loudness, a subjective cognitive measure
Human ear has an enormous range of response to pressure and intensity changes

Threshold of hearing ~0,00001 Pa 
Threshold of pain ~10 Pa

The minimum audible pressure amplitude, at the threshold of hearing, is about 10^-5 pascal, or about 10^-10 standard atmosphere, corresponding to a minimum intensity of about 10-12 watt per square metre. The pressure fluctuation associated with the threshold of pain, meanwhile, is over 10 pascals—one million times the pressure or one trillion times the intensity of the threshold of hearing. In both cases, the enormous dynamic range of the ear dictates that its response to changes in frequency and intensity must be nonlinear.

Frequency ƒ is perceived as pitch

The higher the frequency, the higher the perceived pitch & vice versa

Human hearing ranges between ~20Hz to ~20kHz

The enormous dynamic range of the ear in perceiving frequency & amplitude is non-linear

Perceived loudness varies with intensity & frequency

Perceived pitch varies with frequency only

### Questions and Todos

Google Experiments provides several very nice little audio applications. Check out the [sound wave app](https://musiclab.chromeexperiments.com/Sound-Waves/). What kind of wave type is depicted here?

Also, check out the [spectogram app](https://musiclab.chromeexperiments.com/Spectrogram/). What do you understand from the information provided by the spectogram? What is a spectogram?

Check out [Teropa's harmonic explorer](https://teropa.info/harmonics-explorer/) and play with the frequency and amplitude parameters. Also, add more and more simple sound waves (in this case, sine waves) together. What do you notice? How do the sounds sound like?


### Further Reading and Materials

- [What is Sound?](http://musicandcomputersbook.com/chapter1/01_01.php)
- [Khan Academy - Sound Properties](https://www.youtube.com/watch?time_continue=315&v=-_xZZt99MzY)
- [Science Sauce - Sound Properties](https://www.youtube.com/watch?v=TsQL-sXZOLc)

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


---

# Further Reading



--- 

# Assignment 1

Due in the next but one session with some additional tasks coming next week. 

## Musique Concrète 1/2 

Download the free audio processing applications *Audacity*, *Sonic Visualizer*, and the evaluation version of *Reaper*. 

```diff
- Add download links
```

One goal of this task is that you play around with the different audio applications on your own and try to figure out how they work and what you can do with them. Note down your findings, questions, and learnings in the Github Wiki so that everyone can learn and contribute.

The next goal is that you conduct an audio rendering and work on a piece of musique concrète. Think about one topic or scenery that interests you or that you detest. Try to come up with an auditive sound scene that you would like to create. 

- Pick a mobile recorder or your mobile phone and record some sounds, i.e., create field-recordings, or go to [freesound.org](https://freesound.org) to search for royalty free sounds that fit your idea.
- Load the recorded sounds into Audacity or Reaper and edit the recordings, try to identify interesting sounding parts, cut out parts that you do not like.
- Cut, copy, and paste the recordings and play them back forward and backwards to create and interesting track.

**You can work on this task in a group or on your own!**

```diff
- Add some Audacity & Reaper tutorial, tutorial on editing sounds.
```