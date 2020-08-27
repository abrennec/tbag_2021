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
  - [Syllabus](#syllabus)
  - [Learning Objectives](#learning-objectives)
  - [Evaluation and Grading](#evaluation-and-grading)
- [Communication & Materials](#communication--materials)
  - [Assignments](#assignments)
- [Further Resources for the Interested Reader & References](#further-resources-for-the-interested-reader--references)
  - [Online Resources](#online-resources)
  - [Books](#books)
    - [Creative Coding](#creative-coding)
    - [C/C++](#cc)
    - [Software Design](#software-design)

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

- to introduce the C++ programming language & corresponding build processes
- to explore object-orientation and realtime development with C++
- to get familiar with using a software development kits

Moreover, the course will present different techniques and technologies of graphics, image and audio processing. They will gradually be incorporated into the artistic programming exercises.

## Method of Instruction

This course will start as an online course which requires an increased amount of personal work and participation in the development of problem solutions. There will be slots for discussions every week. 

Make use of the **Github team** when you are stuck and post your questions there. If you cannot find a solution, get in touch with your tutors.

On **Mondays**, new learning material and assignments will be published in the morning. We will meet online to check-in briefly and discuss open questions. 

On **Wednesdays**, we will have a check-in meeting for questions. All assignments will be given a dedicated deadline. In general, please upload any code assignments to the assignment's folder on GitHub and put your research solutions to the GitHub Wiki. 

**Note**: Group work is encouraged but might not be applicable due to the current situation. This will be a point for discussion in the first online session.



## Syllabus

```diff 
- The syllabus might be subject to change depending on how the general progress and on how the online session format works.
```

1. Week: Introduction to the course (2)
2. Week: Audio rendering: Basics of digital sound and audio (4)
3. Week: Audio processing: DSP, audio FX and audio plugins (4)
4. Week: Audio synth: Synthesis and generative audio, audio programming (4)
5. Week: Audio analysis: Fourier transform (4)
6. Week: Graphics rendering: Basics of computer graphics, rasterization and graphics pipeline (4)
7. Week: Graphics modelview: 3D models, vector meshes, transformations (4)
8. Week: Graphics camera: Camera parameters, projections, image setup (4)
9. Week: Graphics shaders: Vertex and fragment shaders (4)
10. Week: Final Exercise + Wrap-up (2)


## Learning Objectives

- Understanding and working with a complex SDK like openFrameworks
- Developing, compiling and building your own C++ applications
- Object-oriented software design with C++
- Applying different computational techniques in an artistic sketch
- Expressing and reflecting on your artistic ideas with openFrameworks


## Evaluation and Grading

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

* An application sketch that can be build, launched, and run
* Engineering effort, clarity of code organization and comprehensibility (i.e., code quality)
* Technical and creative reflection (esp. final exercise)


---

# Communication & Materials

As a communication platform, we will use [GitHub.com](https://github.com/) to share code, lecture materials, comments, and submit homework and project assignments.

- [GitHub repository (public)](https://github.com/ctechfilmuniversity/lecture_creative_coding_2)
- [GitHub Wiki (public)](https://github.com/ctechfilmuniversity/lecture_creative_coding_2/wiki)
- [GitHub team (public)](https://github.com/orgs/ctechfilmuniversity/teams/ss20_cc2)

The repository will be used to share scripts (usually as readme.md) and slides, coding examples, homework and project materials. The Wiki will be maintained by the students to share information that might be useful for everyone, for example, dos and don'ts, useful links, and so on. The team will be used for discussion, comments, notes and any important announcements.

To stay tuned with the materials, clone the main repo:

```
git clone https://github.com/ctechfilmuniversity/lecture_creative_coding_2

```


## Assignments

Please submit your assignments and exercise solutions to the assignments folder of the corresponding session, i.e., "01_intro". To do so, go to the assignments folder and create a folder. Name it **<my_last_name>** and put your results into that folder, for example, like so:

```
For any written assignments:
01_intro/assignments/<my_last_name>/solution.md

For any programming assignments:
01_intro/assignments/<my_last_name>/mySketch
                                bin/
                                src/
                                readme.md
                                addons.make
                                config.make
```

Make sure that you **do not** upload any IDE-based project files. To do so, add a **.gitignore** file to your local sose20_cc2 repository. This should not be uploaded. An example configuration might look like this:

```
# Example .gitignore file
# Configuration for C++ development

# Prerequisites
*.d
*~

/*/.DS_Store
.DS_Store
.gitignore

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app

# Directories
obj/
.vs/

# IDE project files
*.sln
*.vcxproj*
*.xcodeproj/
*.code-workspace
*.xcconfig
*.vscode
*.plist

```


---

# Further Resources for the Interested Reader & References

## Online Resources

### openFrameworks Courses <!-- omit in toc -->
There are several excellent openFrameworks courses available on GitHub, for example:

- Zach Lieberman: https://github.com/ofZach/RTP_SFPC_FALL19
- Tyler Henry: https://github.com/tyhenry/dt_openframeworks_2018
- Dan Wilcox: https://github.com/danomatika/CreativeCodingExamples
- We are no Computer: https://github.com/wearenocomputer/workshop

### References, Tutorials, Community <!-- omit in toc -->
- [learncpp](http://www.learncpp.com) -- Very good resource for beginners and experienced developers!
- [cplusplus](http://www.cplusplus.com/) -- Very good reference site with many examples.
- [cppreference](http://www.cppreference.com/) -- Advanced, very good reference site.
- [fluentcpp](https://www.fluentcpp.com) -- Very good website with a focus on programming design (advanced!).
- [ofBook](https://github.com/openframeworks/ofBook/tree/master/chapters) -- Very good starting point for openFrameworks.
- [openFrameworks](https://openframeworks.cc/) -- All about openFrameworks.
- [openFrameworks Forum](http://forum.openframeworks.cc/) -- Communication tool for openFrameworks.

## Books 

These are all recommendations that will help you dive deeper into creative coding with openFrameworks as well as C++ programming.  

### Creative Coding 

The following books provide interesting exercises and lots of food for thought on creative coding. Technologically, however, the openFrameworks versions used for the example code are outdated and may not work out-of-the-box.

- Denis Perevalov, Igor Tatrnikov (2015): openFrameworks Essentials. Packt Publishing. Birmingham, UK.
- Denis Perevalov (2013): Mastering openFrameworks: Creative Coding Demystified. Packt Publishing. Birmingham, UK.
- Joshua Noble (2009): Programming Interactivity. A Designer’s Guide to Processing, Arduino & openFrameworks. Sebastopol, CA: O’Reilly Media Inc.
- Ira Greenberg (2007): Processing: Creative Coding & Computational Art. Berkley, CA: Friends of ED/Apress Press.

### C/C++  

The first two books will give you a solid understanding of everything C++. The last two books I recommend for intermediate and experienced C++ programmers.

- Bjarne Stroustrup (2013): The C++ Programming Language. Upper Saddle River, NJ: Pearson Education, Inc.
- Bjarne Stroustrup (2014): Programming. Principles & Practices Using C++. Upper Saddle River, NJ: Addison-Wesley.
- Scott Meyers („Effective C++“ series, advanced)
- Herb Sutter („Exceptional C++“ series, really advanced)

### Software Design

If you want to dive even deeper into software design, these books might be of interest for you.

- Grady Booch (1994): Object-oriented Analysis and Design. Addison-Wesley. NY, USA.
- Robert C. Martin (2009): Clean Code. Prentice Hall. NY, USA.
- Robert C. Martin (2017): Clean Architecture. Prentice Hall. NY, USA.
