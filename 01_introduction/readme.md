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
    - [Final Exercise](#final-exercise)
  - [Syllabus](#syllabus)
  - [Learning Objectives](#learning-objectives)
  - [Evaluation and Grading](#evaluation-and-grading)
- [Communication & Materials](#communication--materials)
  - [Assignments](#assignments)
- [Further Resources](#further-resources)
  - [Maths](#maths)
  - [Audio](#audio)
  - [Graphics](#graphics)

---


# Overview of the Course

## Organization 

- Wednesdays 10:00 h - 13:30 h
- Module 5 | 3 SWS | 4 ECTS
- 9 sessions in total 

```diff
- The course will be held online until further notice. 
- During the time of online lectures, we will use the lecture hours for updates, discussions and consultation times.
```

## Course Description 

This course provides you with an introduction to the theoretical backgrounds of digital audio and graphics software applications. In this context, you will learn about the audio and graphics rendering pipelines. 

## Method of Instruction

This course will start as an online course which requires an increased amount of personal work and participation in the development of problem solutions. There will be slots for discussions every week. 

Make use of the **Github team** when you are stuck and post your questions there. If you cannot find a solution, get in touch with your tutors.

On **Mondays**, new learning material and assignments will be published in the morning. We will meet online to check-in briefly and discuss open questions. 

On **Wednesdays**, we will have a check-in meeting for questions. All assignments will be given a dedicated deadline. In general, please upload any code assignments to the assignment's folder on GitHub and put your research solutions to the GitHub Wiki. 

**Note**: Group work is encouraged but might not be applicable due to the current situation. This will be a point for discussion in the first online session.

### Exercises
- (bi-)weekly practical exercises will be assigned and are mandatory to pass the course
- Group work is welcome / mandatory

### Final Exercise 
- Assigned at the end of the course (January/February 2021)
- Combines audio and graphics


## Syllabus

```diff 
- The syllabus might be subject to change depending on how the general progress and on how the online session format works.
```

1. Week: Introduction to the course (2)
2. Week: Audio production: Properties of sound, digital audio fundamentals, audio production workflow (4)
3. Week: Audio processing: Signal flow, audio FX and audio plugins (4)
4. Week: Musical sounds: Fundamental aspects of music, sounds and sound synthesis (4)
5. Week: Music computing: As the name suggest, music computing (4)
6. Week: Graphics pripeline: Basics of computer graphics, rasterization and graphics pipeline, 3d models (4)
7. Week: Graphics modelview: Vector meshes, local vs global space, matrices (4)
8. Week: Graphics transformation: Affine transformations, from 3d to 2d (4)
9. Week: Graphics shaders: Vertex shaders (4)
10. Week: Final Exercise + Wrap-up (2)


## Learning Objectives

Main objective of this course is to get an understanding of digital audio processing as well as 3d computer graphics. The course is split into two parts, audio rendering and graphics rendering. You will learn about mathematical concepts and how they are applied to digital audio and graphics.

The first part, audio rendering, introduces you to the fundamentals of sound and hearing perception, digital audio processing and production as well as sound synthesis and music computing. The theoretical parts will be accompanied with practical exercises so that you can apply the concepts and ideas directly. The notion of sounds in space will be an overarching theme to make you familiar with spatial hearing and sound production. 

In the second part, graphics rendering will be in the foreground of the lecture. Here you will be introduced to the basic concepts of 3D computer graphics and the graphics pipeline. In particular, you will learn about the mathematical concepts behind 3D models, model transformations, viewing and texture, as well as vertex shader programming. Objects in space will also be an overarching theme and the theoretical concepts will be accompanied with practical exercises as well.

At the end of the lecture, a final exercise will allow you to combine both fields in an application and to explore the sounds and objects in space (hopefully!).


## Evaluation and Grading 


```diff
- To be defined
```

In order to pass the course, you need to collect 50 assignment points and participate in a final exercise. All solutions have to be submitted to GitHub to be considered for an evaluation.

For CTech students there will be a grade. The grade will be based on the points collected for the homework assignments and the final exercises. 

### Breakdown <!-- omit in toc -->

* 60% - Homework assignments
  * Programming exercises
  * Wiki updates and critiques
* 40% - Final exercise
  * The final exercise will be a programming exercise of an openFrameworks application. The type of application can be chosen individually. However, the application must include/address:
    * Object-oriented design
    * At least two different topics from the course
    * An artistic idea that can be freely chosen 

### Grading criteria <!-- omit in toc -->

* 


---

# Communication & Materials


```diff
- To be updated
```

As a communication platform, we will use [GitHub.com](https://github.com/) to share code, lecture materials, comments, and submit homework and project assignments.

- [GitHub repository (public)](https://github.com/ctechfilmuniversity/)
- [GitHub Wiki (public)](https://github.com/ctechfilmuniversity/)
- [GitHub team (public)](https://github.com/orgs/ctechfilmuniversity/)

The repository will be used to share scripts (usually as readme.md) and slides, coding examples, homework and project materials. The Wiki will be maintained by the students to share information that might be useful for everyone, for example, dos and don'ts, useful links, and so on. The team will be used for discussion, comments, notes and any important announcements.

To stay tuned with the materials, clone the main repo:

```
git clone https://github.com/ctechfilmuniversity/

```


## Assignments

Please submit your assignments and exercise solutions to the assignments folder of the corresponding session, i.e., "01_intro". To do so, go to the assignments folder and create a folder. Name it **<my_last_name>** and put your results into that folder, for example, like so:

```
For any written assignments:
01_intro/assignments/<my_last_name>/solution.md
```

---

# Further Resources

The following references have served as resources for this lecture and are recommended to dive deeper into the different topics if you are interested.

## Maths

- Semesterapparat at Filmuni's Library called „TBAG“
- Papula, Lothar (2014): Mathematik für Ingenieure & Naturwissenschaftler Band 1. 14. überarb. Aufl., Wiesbaden: Springer Vieweg.


## Audio

- Burg, J., Romney, J. & Schwartz, E. (2014): Digital Sound and Music. Concepts, Applications, and Science. http://digitalsoundandmusic.com
- Burk, P., Polansky, L., Repetto, D., Roberts, M. & Rockmore, D. (2011): Music and Computers. A Theoretical and Historical Approach. http://cmc.music.columbia.edu/MusicAndComputers/
- Howard, D.M. & Angus, J.A.S. (2009): Acoustics and Psychoacoustics. 4th Edition. Oxford, UK: Focal Press. 
- Smith, S. W. (2011): The Scientist and Engineer’s Guide to Digital Signal Processing. http://www.dspguide.com
- Sethares, W.A. (2005): Tuning, Timbre, Spectrum, Scale. 2nd Edition. London, UK: Springer-Verlag.
- Watkinson, J. (1998): The Art of Sound Reproduction. Focal Press. 
- Parviainen, T. (2016): Learn Web Audio from the Ground Up, Part 1: Signals and Sine Waves. http://teropa.info/blog/2016/08/04/sine-waves.html
- Smus, B. (2013): WebAudio API. O’Reilly Media. Free.


## Graphics

- Kouichi Matsuda & Roger Lea (2013): WebGL Programming Guide. CRC Press.
- Modern JavaScript Tutorial: https://javascript.info
- Buss, S. (2003):  3D Computer Graphics—A Mathematical introduction with OpenGL. Cambridge University Press, New York, NY, USA.
- Shiffman, D. (2012): Nature of Code. https://natureofcode.com/book/
