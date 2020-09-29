<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Theoretical Backgrounds of Audio and Graphics Applications](#theoretical-backgrounds-of-audio-and-graphics-applications)
- [Organization of the Course](#organization-of-the-course)
  - [General Information](#general-information)
  - [Method of Instruction](#method-of-instruction)
    - [Weekly Sessions](#weekly-sessions)
    - [Practical Work](#practical-work)
  - [Evaluation and Grading](#evaluation-and-grading)
- [Learning Content](#learning-content)
  - [Objectives](#objectives)
  - [Syllabus and Dates](#syllabus-and-dates)
  - [Communication and Materials](#communication-and-materials)
    - [Platforms](#platforms)
  - [Reading Materials and Resources](#reading-materials-and-resources)
    - [Maths](#maths)
    - [Audio](#audio)
    - [Graphics](#graphics)

---

# Theoretical Backgrounds of Audio and Graphics Applications

This course provides you with an introduction to the theoretical backgrounds of digital audio and graphics software applications. It is split into one part that focuses on different topics in the field of audio rendering such as digital production, audio processing, synthesis and music computing. The second part focuses on 3D computer graphics and in particular on 3D models and vertex meshes, matrix multiplications and transformations, and ends with an introduction to shader programming.

The theoretical lectures will be accompanied with smaller exercises that are intended to underpin two small term projects:  
1) **Audio exercise** - Design and produce a (musical) stereo-based sound space based on a specific topic (i.e., star wars, spacecraft, city slickers, nature, climate change, ... ).
2) **Graphics exercise** - Create and implement an interactive or animated graphical counterpart of the sound space with 3d computer graphics, images/textures, and shaders.

There fill be one final exercise intended to combine both directions of the lecture:

3) **Final exercise** - Combine the results of the audio and graphics exercises into an interactive or animated audio-visual scene.

The three projects will be central to the final grade.


# Organization of the Course

## General Information 

- Mondays 10:00 h - 13:30 h
- Module 5 | 3 SWS | 4 ECTS
- 10 sessions in total, session 1 & 10 only half of time.
- Participation in the lectures is **not compulsory**. **However**, in order to pass the course and receive a grade, you need to collect points. See the [Evaluation and Grading](#evaluation-and-grading) section for the details.


```diff
- The course will be held online until further notice. 
- During the time of online lectures, we will use the lecture hours for updates, discussions and consultation times.
```

## Method of Instruction

The course is desidned as an online course that will use tools and technique from **flipped classroom** and **blended learning** approaches. Theoretical input will be pre-recorded and prepared such that students can work through many of the materials on their own and in their own pace. The weekly sessions will focus on interactive discussions, practical project work, and exercises.

Make use of the **Github team** when you are stuck and post your questions there. If you cannot find a solution, get in touch with your tutors. The **Miro board** will be used for group work and discussions. Make sure that you register a personal account at Miro.

### Weekly Sessions

Each week, new learning materials and assignments will be published. The time from 10 to 13:30 will be used to work through the materials in the group, in smaller teams and on an individual basis.

### Practical Work

- Practical exercises will be part of the lecture sessions to put theory to practice right away.
- Two smaller term projects will have to be taken to pass the course and collect points for the final grade.
- A final exercise will be assigned at the end of the course and will target an audio-visual piece of application.
- Group work is welcome.


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


# Learning Content

## Objectives

Main objective of this course is to get an understanding of digital audio processing as well as 3d computer graphics. The course is split into two parts, audio rendering and graphics rendering. You will learn about mathematical concepts and how they are applied to digital audio and graphics.

The first part, audio rendering, introduces you to the fundamentals of sound and hearing perception, digital audio processing and production as well as sound synthesis and music computing. The theoretical parts will be accompanied with practical exercises so that you can apply the concepts and ideas directly. The notion of sounds in space will be an overarching theme to make you familiar with spatial hearing and sound production. 

In the second part, graphics rendering will be in the foreground of the lecture. Here you will be introduced to the basic concepts of 3D computer graphics and the graphics pipeline. In particular, you will learn about the mathematical concepts behind 3D models, model transformations, viewing and texture, as well as vertex shader programming. Objects in space will also be an overarching theme and the theoretical concepts will be accompanied with practical exercises as well.

At the end of the lecture, a final exercise will allow you to combine both fields in an application and to explore the sounds and objects in space (hopefully!).

## Syllabus and Dates

```diff 
- The syllabus might be subject to change depending on how the general progress and on how the online session format works.
```

1. 26.10.20 - Audio Rendering (4 hrs)
   1. Intro to the course
   2. Computer music history 
   3. Audio rendering basics
   4. Sound properties
   5. DAW and Reaper
2. 02.11.20 - Audio Production (4 hrs)
   1. Digital audio fundamentals
   2. Working with a DAW
   3. Mixing and audio rendering
   4. Audio FX and spatial sound
   5. Project work
3. 16.11.20 - Sound Synthesis (4 hrs)
   1. Sound generation and snythesizers
   2. Waveforms and their mathematical description
   3. Additive and subtractive synthesis
   4. Audio analysis with FFT
   5. Project work
4. 23.11.20 - Music Computing (4 hrs)
   1. Musical sounds vs noise and sound
   2. Harmony, melody, and beat 
   3. Intervals, scales and how to calculate them
   4. Music computing languages and Sonic Pi
   5. Project work
5. 30.11.20 - Audio projects (2 hrs)
   1. Projects presentation
6. 07.12.20 - Graphics Rendering (4 hrs)
   1. Computer graphics history
   2. Graphics rendering basics
   3. 2D images vs 3D graphics 
   4. The role of OpenGL
   5. Introducing p5.js and WebGL
7. 14.12.20 - Models and Views (local vs world) (4 hrs)
   1. 3D models, vectos, vertices and vertex meshes
   2. Local vs global space
   3. Mathematical description through matrices
   4. 3D space vs 2D screen
   5. Project work
8. 11.02.20 - Transformations (4 hrs)
   1. Affine transformations
   2. Translation, scaling, rotation
   3. Matrix multiplication
   4. Project work
9.  25.01.20 - Shader programming (4 hrs)
    1. Reviewing the rendering pipeline
    2. Basics of a shader program and different shader types
    3. Shader attributes and uniforms
    4. Reviewing and altering vertex meshes with shaders
    5. Project work
10. 01.02.20 - Graphics projects
    1. Projects presentation
    2. Final Exercise + course wrap-up (2 hrs)
s

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

