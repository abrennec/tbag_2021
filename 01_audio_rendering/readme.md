<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Overview of the Course](#overview-of-the-course)
  - [Organization](#organization)
  - [Course Description](#course-description)
  - [Method of Instruction](#method-of-instruction)
    - [Exercises](#exercises)
  - [Syllabus](#syllabus)
  - [General Learning Objectives](#general-learning-objectives)
  - [Evaluation and Grading](#evaluation-and-grading)
  - [Communication and Materials](#communication-and-materials)
    - [Platforms](#platforms)
  - [Reading Materials and Resources](#reading-materials-and-resources)
    - [Maths](#maths)
    - [Audio](#audio)
    - [Graphics](#graphics)
- [Audio Rendering](#audio-rendering)
  - [Learning Objectives](#learning-objectives)
  - [Lecture Facts](#lecture-facts)
  - [Historical Overview of Computer Music](#historical-overview-of-computer-music)
  - [Audio Rendering Techniques](#audio-rendering-techniques)
    - [Video](#video)
  - [Properties of Sound](#properties-of-sound)
    - [Video](#video-1)
    - [Physical Aspects of Sound](#physical-aspects-of-sound)
      - [Sound Wave Properties](#sound-wave-properties)
    - [Psychophysical Aspects of Sound](#psychophysical-aspects-of-sound)
    - [Hearing and Acoustics](#hearing-and-acoustics)
    - [Further Reading and Materials](#further-reading-and-materials)
  - [Homework Assignments](#homework-assignments)
    - [History of Computer Music](#history-of-computer-music)
    - [Audio Rendering](#audio-rendering-1)
    - [Sound](#sound)

---


# Overview of the Course

## Organization 

- Mondays 10:00 h - 13:30 h
- Module 5 | 3 SWS | 4 ECTS
- 10 sessions in total, session 1 & 10 only half of time.
- Participation in the lectures is **not compulsory**. **However**, in order to pass the course and receive a grade, you need to submit two term projects and take a final practical exercise.

```diff
- The course will be held online until further notice. 
- During the time of online lectures, we will use the lecture hours for updates, discussions and consultation times.
```

## Course Description

This course provides you with an introduction to the theoretical backgrounds of digital audio and graphics software applications. In this context, you will learn about the audio and graphics rendering pipelines. 

## Method of Instruction

This course will start as an online course which requires an increased amount of personal work and participation in the development of problem solutions. There will be slots for discussions every week. 

Make use of the **Github team** when you are stuck and post your questions there. If you cannot find a solution, get in touch with your tutors.

Each **Monday**, new learning materials and assignments will be published. The time from 10 to 13:30 will be used to work through the materials in the group, in smaller teams and on an individual basis.

### Exercises

- Practical exercises will be part of the lecture sessions to put theory to practice right away.
- Two smaller term projects will have to be taken to pass the course and collect points for the final grade.
- A final exercise will be assigned at the end of the course and will target an audio-visual piece of application.
- Group work is welcome.

## Syllabus

```diff 
- The syllabus might be subject to change depending on how the general progress and on how the online session format works.
```

1. 26.10.20 - Intro to course, Audio Rendering (4 hrs)
2. 02.11.20 - Audio Production (4 hrs)
3. 16.11.20 - Sound Synthesis (4 hrs)
4. 23.11.20 - Music Computing (4 hrs)
5. 30.11.20 - Audio projects (2 hrs)
6. 07.12.20 - Graphics Rendering (4 hrs)
7. 14.12.20 - Models and Views (local vs world) (4 hrs)
8. 11.02.20 - Transformations (4 hrs)
9. 25.01.20 - Shader programming (4 hrs)
10. 01.02.20 - Graphics projects, final Exercise + course wrap-up (2 hrs)



## General Learning Objectives

Main objective of this course is to get an understanding of digital audio processing as well as 3d computer graphics. The course is split into two parts, audio rendering and graphics rendering. You will learn about mathematical concepts and how they are applied to digital audio and graphics.

The first part, audio rendering, introduces you to the fundamentals of sound and hearing perception, digital audio processing and production as well as sound synthesis and music computing. The theoretical parts will be accompanied with practical exercises so that you can apply the concepts and ideas directly. The notion of sounds in space will be an overarching theme to make you familiar with spatial hearing and sound production. 

In the second part, graphics rendering will be in the foreground of the lecture. Here you will be introduced to the basic concepts of 3D computer graphics and the graphics pipeline. In particular, you will learn about the mathematical concepts behind 3D models, model transformations, viewing and texture, as well as vertex shader programming. Objects in space will also be an overarching theme and the theoretical concepts will be accompanied with practical exercises as well.

At the end of the lecture, a final exercise will allow you to combine both fields in an application and to explore the sounds and objects in space (hopefully!).


## Evaluation and Grading 

In order to **pass the course**, you need to collect 50/100 points. All solutions have to be submitted to GitHub to be considered for an evaluation.

For CTech students there will be a **grade**. The grade will be based on the points collected for the term projects and the final exercise. 

### Grading Breakdown <!-- omit in toc -->

The grade is derived from the collected points:

* 20 pts - General involvement and quality of work
* 40 pts - Term projects 
  * 20 pts Audio project (due 30 Nov, scope: ~1 working day)
  * 20 pts Graphics project (due 1 Feb, scope: ~1 working day)
* 40 pts - Final exercise (due end of winter term, scope ~2.5 working days)

 Bonus points can be awarded for excellent work or additional tasks.

### Grading criteria <!-- omit in toc -->

* Correctness of the task
* Quality of the result
* Technical accuracy (i.e., consistent naming conventions, correct spelling, clean folders (no log files), etc.)
* Presentation in class (informal)

## Communication and Materials


```diff
- To be updated
```
### Platforms

As a communication platform, we will use [GitHub.com](https://github.com/) to share code, lecture materials, comments, and submit homework and project assignments.

- [GitHub repository (public)](https://github.com/ctechfilmuniversity/)
- [GitHub Wiki (public)](https://github.com/ctechfilmuniversity/)
- [GitHub team (public)](https://github.com/orgs/ctechfilmuniversity/)

The repository will be used to share scripts (usually as readme.md) and slides, coding examples, homework and project materials. The Wiki will be maintained by the students to share information that might be useful for everyone, for example, dos and don'ts, useful links, and so on. The team will be used for discussion, comments, notes and any important announcements.

To stay tuned with the materials, clone the main repo:

```
git clone https://github.com/ctechfilmuniversity/

```

<!-- We will also use a Miro board for group work and collecting, categorizing and storing central topics.

- Miro board (TBD) -->

---

## Reading Materials and Resources

The following references have served as resources for this lecture and are recommended to dive deeper into the different topics if you are interested.

### Maths

- Semesterapparat at Filmuni's Library called „TBAG“
- Papula, Lothar (2014): Mathematik für Ingenieure & Naturwissenschaftler Band 1. 14. überarb. Aufl., Wiesbaden: Springer Vieweg.


### Audio

- Burg, J., Romney, J. & Schwartz, E. (2014): Digital Sound and Music. Concepts, Applications, and Science. http://digitalsoundandmusic.com
- Burk, P., Polansky, L., Repetto, D., Roberts, M. & Rockmore, D. (2011): Music and Computers. A Theoretical and Historical Approach. http://cmc.music.columbia.edu/MusicAndComputers/
- Howard, D.M. & Angus, J.A.S. (2009): Acoustics and Psychoacoustics. 4th Edition. Oxford, UK: Focal Press. 
- Smith, S. W. (2011): The Scientist and Engineer’s Guide to Digital Signal Processing. http://www.dspguide.com
- Sethares, W.A. (2005): Tuning, Timbre, Spectrum, Scale. 2nd Edition. London, UK: Springer-Verlag.
- Watkinson, J. (1998): The Art of Sound Reproduction. Focal Press. 
- Parviainen, T. (2016): Learn Web Audio from the Ground Up, Part 1: Signals and Sine Waves. http://teropa.info/blog/2016/08/04/sine-waves.html
- Smus, B. (2013): WebAudio API. O’Reilly Media. Free.
- Hall, D.E. (2008): Musikalische Akustik. Schott, Mainz.


### Graphics

- Kouichi Matsuda & Roger Lea (2013): WebGL Programming Guide. CRC Press.
- Modern JavaScript Tutorial: https://javascript.info
- Buss, S. (2003):  3D Computer Graphics—A Mathematical introduction with OpenGL. Cambridge University Press, New York, NY, USA.
- Shiffman, D. (2012): Nature of Code. https://natureofcode.com/book/
- Learn Computer Graphics from Scracht: https://www.scratchapixel.com

--- 


# Audio Rendering

## Learning Objectives

To understand 

- the historical context of computer music and digital audio
- what is meant by audio rendering
- what is sound and what are its properites
- how hearing works

## Lecture Facts

In this lecture we will start our journey into the theoretical backgrounds of digital audio software from different perspectives:

1) **Historicaly Overview**: We will start with an historical overview of the development and milestones that established computer music and digital audio processing techniques.
2) **Audio rendering**: We will look into common audio rendering approaches so that you get a general understanding and overview of what is actually meant by audio rendering and how it is basically conducted.
3) **Properties of sound**: We will look into the complex phenomenon called *sound* and its physical and psychophysical properties. This will lay the ground works for understanding how sound creation, propagation, and perception works and what that means for digitally rendering and processing audio.



## Historical Overview of Computer Music

To give you a gentle introduction into the sound and audio topics that we will cover, please checkout the video presentation on central milestones in the history of computer music:

```diff
- To be updated
```
- Link to Computer Music History video
- ~ 14 mins

![screencast](imgs/screencast.png)

You can find the accompanying slides in the **resources** folder. 



## Audio Rendering Techniques

Audio rendering is a term commonly used in the context of digital sound reproduction with a special focus on the rendering process itself. In general, audio rendering targets the processing and mixing together of one ore more **sound sources** (for example, musical instruments, vocals, guitars, drums, etc.) such that an **audio image** or **soundscape** is created ready to be played back on a (specific) set of loudspeakers or headphones, the **output devices**.


### Video

To get an overview of audio rendering check out the accompanying video presentation:

```diff
- To be updated
```
- Link to Audio Rendering video
- ~ 25 mins

![screencast](imgs/screencast.png)


Make sure that you take notes during the video presentation so that you can answer the questions in the homework assignemnts section.



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


### Further Reading and Materials

- [What is Sound?](http://musicandcomputersbook.com/chapter1/01_01.php)
- [Khan Academy - Sound Properties](https://www.youtube.com/watch?time_continue=315&v=-_xZZt99MzY)
- [Science Sauce - Sound Properties](https://www.youtube.com/watch?v=TsQL-sXZOLc)


--- 

## Homework Assignments

- MIRO BOARD

### History of Computer Music

In the video on computer music history, you learned about **Musique Concrète**. Music Concrète was an essential and critical milestone from a technological as well as from an artistic point of view. It introduced a completely new approach to the process of music making by re-using, altering and adapting pre-recorded sounds. To get an even better understanding of this technique and art form, please also check out the following two articles:

- [All you need to know about Musique Concrète](https://www.musicradar.com/news/everything-you-need-to-know-about-musique-concrete)
- [Pierre Schaeffer und die Musique Concrète](https://museum.rechtaufremix.org/exponate/pierre-schaeffer-und-die-musique-concrete/)


Music concrète will serve as the basis for our first practical exercise in the next session. To prepare that session, please wrap your head around the following questions and use the **Github Wiki** to add additional material, examples, questions and thoughts that we can use as a basis for a discussion next week: 

- What is musique concrète?
- What was so revolutionary about musique concrète?
- What do you find interesting? How could you imagine using this in an art piece?
- What is interesting from a technological point of view, what from an artistic point of view?


### Audio Rendering

- What is meant by audio rendering in general?
- What are the different audio rendering approaches? 
- *Sound reproduction* or *audio rendering*, how do you think does the meaning or intention of the terms differ?
- With this basic knowledge of the audio rendering process, try to draw a simple diagram that incorporates the following terms:
  - input source
  - output device
  - processing unit
  - analog to digital conversion
  - digital to analog conversion

### Sound

- Google Experiments provides several very nice little audio applications. Check out the [sound wave app](https://musiclab.chromeexperiments.com/Sound-Waves/). What kind of wave type is depicted here?

- Also, check out the [spectogram app](https://musiclab.chromeexperiments.com/Spectrogram/). 
  - What do you understand from the information provided by the spectogram? 
  - What is a spectogram?

- Check out [Teropa's harmonic explorer](https://teropa.info/harmonics-explorer/) and play with the frequency and amplitude parameters. Also, add more and more simple sound waves (in this case, sine waves) together. 
  - What do you notice? 
  - How do the sounds sound like?