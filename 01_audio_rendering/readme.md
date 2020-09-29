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
- [Audio Rendering](#audio-rendering)
  - [History of Computer Music](#history-of-computer-music)
  - [Audio Rendering Basics](#audio-rendering-basics)
  - [Sound Properties](#sound-properties)
    - [Physical Aspects of Sound](#physical-aspects-of-sound)
      - [Sound Wave Properties](#sound-wave-properties)
    - [Psychophysical Aspects of Sound](#psychophysical-aspects-of-sound)
    - [Hearing and Acoustics](#hearing-and-acoustics)
  - [Reaper Introduction](#reaper-introduction)
- [Assignments and Todos](#assignments-and-todos)
  - [Music Concrète](#music-concrète)
  - [Audio Rendering](#audio-rendering-1)
  - [Sound](#sound)

---

# Learning Objectives

**What?**

- The historical context of computer music and digital audio.
- Basics about audio rendering.
- Physical and psychophysical properties of sound.
- How to use a digital audio workstation.

**Why?**

1) **Historicaly Overview**: We will start with an historical overview of the development and milestones that established computer music and digital audio processing techniques.
2) **Audio rendering**: We will look into common audio rendering approaches so that you get a general understanding and overview of what is actually meant by audio rendering and how it is basically conducted.
3) **Properties of sound**: We will look into the complex phenomenon called *sound* and its physical and psychophysical properties. This will lay the ground works for understanding how sound creation, propagation, and perception works and what that means for digitally rendering and processing audio.
4) **Introduction to Reaper**: We will learn about a digital audio workstation, Reaper, which will be the tool used to handle audio files in this lecture.


# Audio Rendering

## History of Computer Music

To give you a gentle introduction into the sound and audio topics that we will cover, please checkout the video presentation on central milestones in the history of computer music:

```diff
- To be updated
```
- Link to Computer Music History video
- ~ 14 mins

![screencast](imgs/screencast.png)

You can find the accompanying slides in the **resources** folder. 

--- 

## Audio Rendering Basics

Audio rendering is a term commonly used in the context of digital sound reproduction with a special focus on the rendering process itself. In general, audio rendering targets the processing and mixing together of one ore more **sound sources** (for example, musical instruments, vocals, guitars, drums, etc.) such that an **audio image** or **soundscape** is created ready to be played back on a (specific) set of loudspeakers or headphones, the **output devices**.


To get an overview of audio rendering check out the accompanying video presentation:

```diff
- To be updated
```
- Link to Audio Rendering video
- ~ 25 mins

![screencast](imgs/screencast.png)


Make sure that you take notes during the video presentation so that you can answer the questions in the homework assignemnts section.


## Sound Properties

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


## Reaper Introduction

--- 

# Assignments and Todos

- MIRO BOARD

## Music Concrète

In the video on computer music history, you learned about **Musique Concrète**. Music Concrète was an essential and critical milestone from a technological as well as from an artistic point of view. It introduced a completely new approach to the process of music making by re-using, altering and adapting pre-recorded sounds. To get an even better understanding of this technique and art form, please also check out the following two articles:

- [All you need to know about Musique Concrète](https://www.musicradar.com/news/everything-you-need-to-know-about-musique-concrete)
- [Pierre Schaeffer und die Musique Concrète](https://museum.rechtaufremix.org/exponate/pierre-schaeffer-und-die-musique-concrete/)


Music concrète will serve as the basis for our first practical exercise in the next session. To prepare that session, please wrap your head around the following questions and use the **Github Wiki** to add additional material, examples, questions and thoughts that we can use as a basis for a discussion next week: 

- What is musique concrète?
- What was so revolutionary about musique concrète?
- What do you find interesting? How could you imagine using this in an art piece?
- What is interesting from a technological point of view, what from an artistic point of view?


## Audio Rendering

- What is meant by audio rendering in general?
- What are the different audio rendering approaches? 
- *Sound reproduction* or *audio rendering*, how do you think does the meaning or intention of the terms differ?
- With this basic knowledge of the audio rendering process, try to draw a simple diagram that incorporates the following terms:
  - input source
  - output device
  - processing unit
  - analog to digital conversion
  - digital to analog conversion

## Sound

- Further audio visual material on the properties of sound can be found here:
  - [What is Sound?](http://musicandcomputersbook.com/chapter1/01_01.php)
  - [Khan Academy - Sound Properties](https://www.youtube.com/watch?time_continue=315&v=-_xZZt99MzY)
  - [Science Sauce - Sound Properties](https://www.youtube.com/watch?v=TsQL-sXZOLc)

- Google Experiments provides several very nice little audio applications. Check out the [sound wave app](https://musiclab.chromeexperiments.com/Sound-Waves/). What kind of wave type is depicted here?

- Also, check out the [spectogram app](https://musiclab.chromeexperiments.com/Spectrogram/). 
  - What do you understand from the information provided by the spectogram? 
  - What is a spectogram?

- Check out [Teropa's harmonic explorer](https://teropa.info/harmonics-explorer/) and play with the frequency and amplitude parameters. Also, add more and more simple sound waves (in this case, sine waves) together. 
  - What do you notice? 
  - How do the sounds sound like?