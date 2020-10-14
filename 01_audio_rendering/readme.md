<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Audio Rendering - Learning Objectives](#audio-rendering---learning-objectives)
- [History of Computer Music](#history-of-computer-music)
    - [Video Lecture](#video-lecture)
    - [Exercise - Music Concrète](#exercise---music-concrète)
- [Properties of Sound](#properties-of-sound)
  - [Physical and Psychophysical Aspects](#physical-and-psychophysical-aspects)
  - [Sound Generation & Propagation](#sound-generation--propagation)
    - [Longitudinal Wave](#longitudinal-wave)
    - [Transversal Wave](#transversal-wave)
      - [*Interactive App*](#interactive-app)
    - [Sound Pressure Waves](#sound-pressure-waves)
    - [Amplitude](#amplitude)
    - [Frequency](#frequency)
  - [Sound Perception](#sound-perception)
    - [Hearing](#hearing)
    - [Human Hearing Range](#human-hearing-range)
    - [Hearing](#hearing-1)
    - [Exercise - Theory](#exercise---theory)
- [Audio Rendering Basics](#audio-rendering-basics)
    - [Video Lecture](#video-lecture-1)
    - [Exercise - Audio Rendering](#exercise---audio-rendering)
- [Reaper Introduction](#reaper-introduction)
- [Homework Assignment](#homework-assignment)
  - [Sound](#sound)
  - [Reaper and Musique Concrète](#reaper-and-musique-concrète)
    - [Get started](#get-started)
    - [Topics](#topics)
    - [Resources](#resources)
    - [Editing](#editing)

---

# Audio Rendering - Learning Objectives

**What?**

- The historical context of computer music and digital audio.
- Physical and psychophysical properties of sound.
- Introduction into audio rendering.
- How to use a digital audio workstation.

**Why?**

1) **Historicaly Overview**: We will start with an historical overview of the development and milestones that established computer music and digital audio processing techniques.
2) **Properties of sound**: We will look into the complex phenomenon called *sound* and its physical and psychophysical properties. This will lay the ground works for understanding how sound creation, propagation, and perception works and what that means for digitally rendering and processing audio.
3) **Audio rendering**: We will look into common audio rendering approaches so that you get a general understanding and overview of what is actually meant by audio rendering and how it is basically conducted.
4) **Introduction to Reaper**: We will learn about a digital audio workstation, Reaper, which will be the tool used to handle audio files in this lecture.


# History of Computer Music

To give you a gentle introduction into the sound and audio topics that we will cover, please checkout the video presentation on central milestones in the history of computer music:

### Video Lecture

```diff
- To be updated
```
- Link to Computer Music History video
- ~ 23 mins

![screencast](imgs/screencast.png)

You can find the accompanying slides in the **resources** folder. 


### Exercise - Music Concrète

In the video on computer music history, you learned about **Musique Concrète**. Music Concrète was an essential and critical milestone from a technological as well as from an artistic point of view. It introduced a completely new approach to the process of music making by re-using, altering and adapting pre-recorded sounds. To get an even better understanding of this technique and art form, check out the following resources as well:

- [All you need to know about Musique Concrète](https://www.musicradar.com/news/everything-you-need-to-know-about-musique-concrete)
- [Pierre Schaeffer und die Musique Concrète](https://museum.rechtaufremix.org/exponate/pierre-schaeffer-und-die-musique-concrete/)

**Group work**: Music concrète will serve as the basis for our first practical exercise. Once you have completed the material above, please get in touch with your group member. Wrap your heads around the following questions and use sticky notes and this **[Miro Board](https://miro.com/app/board/o9J_kjnEj5M=/?moveToWidget=3074457350351573492&cot=12)** to answer them and add additional material, examples, questions and thoughts that we can use as a basis for a discussion: 

- What is musique concrète?
- What was so revolutionary about musique concrète?
- What do you find interesting? How could you imagine using this in an art piece?
- *Bonus: What is interesting from a technological point of view, what from an artistic point of view?*

--- 

# Properties of Sound

## Physical and Psychophysical Aspects

```
“If a tree falls in the forest and no one is near, does it make any sound?“ 
```

Sound is a complex physical (acoustic) and psychophysical (cognitive) phenomenon that involves an understanding of physics and of the human perception. 
Sound as a physical event is defined by how sound is generated and propagated and refers to the **physical aspects** of sound. Sound as a cognitive auditory event is defined by how sound is perceived and processed by the human brain and hearing organs and refers to the **psychophysical aspects** of sound. It is the interaction of these three aspects, **generation**, **propagation**, and **perception**, which enables us to finally hear sound. Put differently, in order to hear a sound, three aspects are needed: 

- a **sound source** that generates sound
- a **medium** through which sound can propagate
- a **listener** who perceives and hears the sound

![sound_overview](imgs/sound_overview.png)


## Sound Generation & Propagation

In order to generate sound, a vibrating object (e.g. a tuning fork) is required which causes a mechanical disturbance in a medium (e.g. air), as depicted in the following illustration: 

![tuning fork](imgs/pressure_wave.gif)
*Image source: https://www.physicsclassroom.com/Class/sound/tfl.gif*

The vibration of the tuning fork causes the air molecules in its closest proximity to vibrate as well. Their vibration is then transmitted to the next set of molecules in their closest proximity and so on. Hence, the inital disturbance caused by the mechanical movement of the tuning fork causes a chain reaction of smaller or larger disturbances that propagate through the medium. 

It is important to note that the molecules and vibrating objects do not start traveling. It is the energy that is generated by the initial mechanical disturbance that is propagated through the medium. 
The specific form of how this energy travels through the medium is called a **wave**. 

### Longitudinal Wave

When the direction of the vibration that creates the wave is equal to the direction of the wave propagation, i.e., in the same direction, we are talking about a **longitudinal wave**. This happens, for instance, when sound travels through air or gas: 

![longitudinal wave](imgs/longitudinal.gif)
*Image source: https://de.wikipedia.org/wiki/Datei:Podelna_vlna.gif*

### Transversal Wave

In contrast, when the direction of vibration that creates the wave is perpendicular to the direction of the wave propagation, we are talking about a **transversal wave**. This happes, for instance, when a stone falls into the water or a rope or string vibrate:

![traversal wave](imgs/transversal.gif)
*Image source: https://de.wikipedia.org/wiki/Datei:Pricna_vlna.gif*

#### *Interactive App*

*Google Experiments provides several very nice little audio applications. Check out the [sound wave app](https://musiclab.chromeexperiments.com/Sound-Waves/). What kind of wave type is depicted here?*


### Sound Pressure Waves

In our context, we will focus on longitudinal waves that exist in a gas like medium like air. 
In a physical sense, these waves are called **pressure waves** because the vibration of air molecules is actually a change of air pressure caused by an alternating sequence of compression and rarefaction, as depicted in the following image:

![sound wave representation](imgs/pressure_wave.png)

As you can see in the illustration, the air molecules depicted at the top of the image are either close to each other or farther away. This depends on the wave propagation and on the current level of compression or rarefaction. In general, the wave propagation and the corresponding pressure change can be described as a function of compression and rarefaction against position or over time. Sine and cosine waves serve well to represent waves mathematically. 

The image also introduces the notion of a **cycle**. A cycle represents one execution of wave propagation from equilibrium (or rest position) to maximum compression, to maximum rarefaction and back to equilibrium. The notion of a cycle is important in the context of frequency.

<!-- The image also introduces the **wavelength** which describes the distance from two conecutive wave crests or troughs. In the context of sound and audio rendering, the wavelength is an important property when it comes to room acoustics.  -->

<!-- The pressure wave is the result of a **mechanical disturbance** in the medium. Hence, to generate sound, a disturbance or **vibration** is required. This vibration might be caused by any kind of **vibrating object** like, for instance, a vibrating speaker membrane, a tuning fork, a drum beat, a slammed door, a guitar strings, or simply an oscillating air particle, to name a few.  -->

For our further considerations, however, two other properties of waves are decisive: **frequency** and **amplitude**:

![amplitude_frequency](imgs/amplitude_frequency.png)


### Amplitude

Amplitude describes the strengths of the air pressure changes and represents the maximum magnitude or distance of displacement from the equilibrium to the maximal compression or rarefaction, as depcited in the next Figure:

![amplitude](imgs/amplitude.png)

In a psychophysical sense, Amplitude is interpreted or preceived as **loudness**. The stronger the pressure wave, i.e., the largert the distance between maximum compression and maximum rarefaction, the louder the sound. 

### Frequency

Frequency describes the rate at which the air pressure changes from compression to rarefaction per second. It is measured as **number of cycles per second** in  where **one cycle** is one sequence of an oscillation from equilibrium to pressure compression to rarefaction and back to equilibrium, as depicted in the next Figure:

![frequency](imgs/frequency.png)

In a psychophysical sense, Frequency is perceived as pitch. A higher frequency, i.e., a high number of cycles per second is perceived as a higher tone whereas a low frequency, i.e., a small number of cycles per second is perceived as a lower tone.


## Sound Perception

Anything that we perceive about the physical world is referred to as **psychophysical** because it is related to the human organs of sensation (for exmaple eyes for seeing and ears for hearing) as well as the interpretation and processing of these sensations by the human brain. In the context of sound, a pressure wave that reaches the human ear is translated into electrochemical impulses and sent to the brain for further processing. This is illustrated in a simplified version below:

![sound perception](imgs/sound_perception.png)

Note that not all pressure waves can be processed by the human brain as sound. Only those waves that are
within the **human hearing range** will be referred
to as **sound waves**. 

### Hearing

The eardrum works like a **transducer** in this context. It transforms mechanical energy into electrochemical impulses. 

![ear anatomy](imgs/ear_anatomy.jpg)
*Image source: http://pikeslaneprimary.weebly.com/class-4aj/how-do-we-hear-sounds*

### Human Hearing Range

As we have seen in the previous section, loudness is a psychophysical property related to the amplitude of sound waves. It commonly describes the human perception of the power or intensity of a sound wave's change in pressure. Pitch, on the other hand, is a psychophysical property related to the frequency of a sound wave. It commonly describes how high or low humans perceive a specific sound. 




<!-- 
In digital signal: loudness is computed by adding up the squares of the digital samples
If we want to know the power of a segment of audio we add up the squares of the the samples and devide by the amount of samples -->

<!-- 

Human hearing (and thus what we refer to as sound) is around 20Hz to 20kHz 


Human ear has an enormous range of response to pressure and intensity changes:

- Threshold of hearing ~0,00001 Pa 
- Threshold of pain ~10 Pa -->

<!-- The minimum audible pressure amplitude, at the threshold of hearing, is about 10^-5 pascal, or about 10^-10 standard atmosphere, corresponding to a minimum intensity of about 10-12 watt per square metre. The pressure fluctuation associated with the threshold of pain, meanwhile, is over 10 pascals—one million times the pressure or one trillion times the intensity of the threshold of hearing. In both cases, the enormous dynamic range of the ear dictates that its response to changes in frequency and intensity must be nonlinear.

Frequency ƒ is perceived as pitch

The higher the frequency, the higher the perceived pitch & vice versa

Human hearing ranges between ~20Hz to ~20kHz

The enormous dynamic range of the ear in perceiving frequency & amplitude is non-linear

Perceived loudness varies with intensity & frequency
Perceived pitch varies with frequency only -->

### Hearing


### Exercise - Theory

Read the first three sections of the [Music and Computers Book](http://musicandcomputersbook.com)  and check out the interactive applets.

- [1.1 What is Sound?](http://musicandcomputersbook.com/chapter1/01_01.php)
- [1.2 Amplitude and Loudness](http://musicandcomputersbook.com/chapter1/01_02.php)
- [1.3 Frequency, Pitch, and Intervals](http://musicandcomputersbook.com/chapter1/01_03.php)

To get an understanding of how Amplitude and Frequency are related, checkout this [interactive applet](http://musicandcomputersbook.com/applets/1_3_hear_freq.php) that allows you to change the two parameters.

Further audio visual material on the properties of sound can be found at:
  - [Khan Academy - Sound Properties](https://www.youtube.com/watch?time_continue=315&v=-_xZZt99MzY)
  - [Science Sauce - Sound Properties](https://www.youtube.com/watch?v=TsQL-sXZOLc)


***Please Note:*** The previous sections on sound properties were restricted to the very basic concepts of sound generation and propagation through air and addressed the most essential properties of sound in order to get you started. To dive into more aspects of sound and acoustics, please checkout the following literature:

- Musimathics
- Acoustics and psychoacoustics

---

# Audio Rendering Basics

Audio rendering is a term commonly used in the context of digital sound reproduction with a special focus on the rendering process itself. In general, audio rendering targets the processing and mixing together of one ore more **sound sources** (for example, musical instruments, vocals, guitars, drums, etc.) such that an **audio image** or **soundscape** is created ready to be played back on a (specific) set of loudspeakers or headphones, the **output devices**.

### Video Lecture

To get an overview of audio rendering check out the accompanying video presentation:

```diff
- To be updated
```
- Link to Audio Rendering video
- ~ 14 mins

![screencast](imgs/screencast.png)


### Exercise - Audio Rendering

Now check out this [**Miro Board frame**](https://miro.com/app/board/o9J_kjnEj5M=/?moveToWidget=3074457350351779224&cot=12) to work on the following questions and todos in groups of 2, every group works on one task:

- What is meant by audio rendering in general?
- What are the different audio rendering approaches? 
- *Sound reproduction* or *audio rendering*, how do you think does the meaning or intention of the terms differ?
- With this basic knowledge of the audio rendering process, try to draw a simple diagram that incorporates the following terms:
  - input source
  - output device
  - processing unit
  - analog to digital conversion
  - digital to analog conversion

--- 

# Reaper Introduction

**Live session intro via zoom**

Reaper is a digital audio workstation that we will be using during this lecture. Please download and install Reaper for the time of being. You can use it freely for 30 days and might continue the evaluation process thereafter unless you would like to get a licence. Please get in touch with your tutor in that case.

- [Reaper website](https://www.reaper.fm/index.php)
- [Download Reaper Link](https://www.reaper.fm/download.php)

To get started with Reaper, for example, checkout the first 30 minutes of this tutorial by Hop Pole Studios on Youtube:

- [Hop Pole Studio: Reaper DAW 101: The Basics Part 1](https://www.youtube.com/watch?v=JwDcTPn2dvc)
- **EDITING WITH REAPER**

To get a good understanding of the software, checkout the [Reaper user guide](https://www.reaper.fm/userguide.php) and the additional material and tutorial resource provided via the website.

--- 

# Homework Assignment

## Sound

- Read this script's **Properties of Sound** chapter including and follow the exercises.


<!-- - Checkout this [**Miro Board frame**](https://miro.com/app/board/o9J_kjnEj5M=/?moveToWidget=3074457350352000606&cot=12) and add answers to the above mentioned questions, add other materials that reflect what you have learned, as well as questions that you would like to clarify. -->


## Reaper and Musique Concrète

### Get started 

This task will kick-off the first small term project. Your task will be to create one song in the style of musique conrète. To get an idea of where or how to start, check out this video: 

- [Recipe for Musique Conrète](https://www.youtube.com/watch?v=2ZpwbXDleDw)


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

