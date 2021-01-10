<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Graphics Rendering - Learning Objectives](#graphics-rendering---learning-objectives)
  - [Computer Graphics History](#computer-graphics-history)
    - [Lecture Video](#lecture-video)
  - [Graphics Rendering Basics](#graphics-rendering-basics)
  - [Euclidian Geometry and Vertices](#euclidian-geometry-and-vertices)
    - [Lecture Video](#lecture-video-1)
    - [Additional Material](#additional-material)
  - [3D Geometric Objects and Triangles](#3d-geometric-objects-and-triangles)
    - [Terminology](#terminology)
    - [p5 / WebGL approach](#p5--webgl-approach)
    - [Examples of Polygon Meshes](#examples-of-polygon-meshes)
      - [Level of Detail](#level-of-detail)
      - [Adaptive Refinement](#adaptive-refinement)
    - [Additional Material](#additional-material-1)
- [Assignments](#assignments)

---


# Graphics Rendering - Learning Objectives

**What?**

In the upcoming four lectures, we will look into selected topics from computer graphics with the intention to shed light on the general graphics rendering process. In this first lecture, we will look into the following aspects:

- Computer graphics history
- Graphics rendering basics
- Euclidian geometry and vertices
- 3D geometric objects and triangles exercises

**Why?** 

A short overview of the history of computer graphics will serve as a context for the lecture and provide you with - hopefully - interesting insights into the development of computer graphics over the last decades. Graphics rendering basics will briefly introduce the main goals of computer graphics and distinguish it from, i.e., image processing. Finally, an understanding of euclidian geometry is essential when dealing with computer graphics not only for scene and object creation but, as we will see later on, also for scene setup, object manipulation and many other aspects of graphics rendering. We will end this lecture with a couple of exercises on 3d geometric object generation and vertex manipulation.

## Computer Graphics History

### Lecture Video

The following lecture video presents you with selected milestones from computer graphics history. Check out the video presentation at the following address and the accompanying slides in the resources folder:

- [Link to CG history video]()
- ~ 20 mins

![screencast](imgs/screencast.png)

<!-- ### Additional Material

Please checkout in particular the video reference added to the "VolLibre" film. It shows you how much geometry and mathematics are interwined with computer graphics and how different subjects and/or research areas can influence each other. 

- [More info on fractal geometry by 3blue1brown](https://www.3blue1brown.com/videos-blog/2017/5/26/fractals-are-typically-not-self-similar)  -->

## Graphics Rendering Basics

During the lecture, I will give you an **online presentation** on graphics rendering basics. Please find the accompanying slides in the ressources folder.

![graphics rendering](imgs/rendering_pipeline.png)

## Euclidian Geometry and Vertices

### Lecture Video

The following lecture video introduces you to vector spaces and euclidian geometry in general. Check out the video presentation at the following address and the accompanying slides in the resources folder:

- [Link to vector spaces video]()
- ~ XX mins

![screencast](imgs/screencast.png)

### Additional Material

Highly recommended:

- [3blue1brown's series on linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
  - [... on vectors](https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1)
  - [... on linear combinations and more](https://www.youtube.com/watch?v=k7RM-ot2NWY&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2)

## 3D Geometric Objects and Triangles

Geometric objects are an essential part when it comes to setting up a 3D scene. In computer graphics, different representation approaches exist to describe 3D geometric objects (e.g. polygons and vertex meshes, voxel objects, or implicit surfaces that are based on implicit equations). 

Since vertex meshes and polygon representations are the common approach for describing 3d geometric objects in most real-time and interactive graphics applications or games engines, we will focus on these representations here: 

![triangle mesh bunny](imgs/polygon_mesh.png)
*Image source: https://tobias.isenberg.cc/graphics-intro/uploads/Class/03-3D_object_representations.pdf*

### Terminology

Important terms in this context are:

- **Triangle vertices** - Three vertices that describe to a triangle.
- **Triangle faces** - The surface that is being described by the triangle, as illustrated in the previous image.
- **Normal vector** - Each triangle face (but also every triangle vertex) can be used to calculate a normal vector, i.e., a vector that is perpendicular to the triangle face. Checkout the **cross product** to understand how normal vectors are being calculated.

In the following image, triangle vertices are represented by v1, v2, .., v4 whereas normal vectors are represented by n1 and n2:

![terminology](imgs/triangle_terms.png)

Normal vectors are very impportant entities in computer graphics as they are heavily used during the rendering process. They tell us where the face is pointing to and thus can be used to 

<!-- ![vertex normals](imgs/vertex%20normal.png)
*Image source: https://upload.wikimedia.org/wikipedia/commons/3/3c/Vertex_normals.png* -->

### p5 / WebGL approach

In order to create a mesh with p5.js, which uses WebGL API, you need to use the **beginShape** and **endShape** commands and specify how the vertices are to be connected (in this case, we want them to be connected as **TRIANGLES**). 

In p5.js, the **beginShape** and **endShape** commands (this is also true for the corresponding commands in OpenGL or WebGL) take care of the generation of the polygon 2D mesh:

![vertex normals](imgs/p5_triangles.png)
*Image source: https://p5js.org/reference/#/p5/beginShape*


### Examples of Polygon Meshes

Different calculation methods for triangle subdivision have been developed and are being used. Their application often times depends on their **efficiency** in terms of rendering times and their **quality** in terms of realistic object representation. 

#### Level of Detail

A typical example for a polygon mesh at different **resolitions** or **levels of detail** of a bunny object is depicted in the following image:

![triangle mesh bunny](imgs/triangle_bunny_mesh.jpg)
*Image source: http://www.cmap.polytechnique.fr/~peyre/images/test_remeshing.jpg*

#### Adaptive Refinement

The following images illustrate an approach that referred to as **adaptive refinement** where that targets efficiencey and quality of specific object areas:

![triangle mesh bunny](imgs/vertex_mesh_bunnies.png)
*Image source: https://www.graphics.rwth-aachen.de/media/papers/sqrt31.pdf*

Checkout the [accompanying publication](https://www.graphics.rwth-aachen.de/media/papers/sqrt31.pdf) if you are interested in the details.


<!-- ### Implementation Details -- Advanced

A vertex mesh is essentially a collection of vertex coordinates (vertices) that are arranged in a particular format (triangles, triangle strup) in order to describe the surface of the object. Triangle meshes use a vertex and an index buffer.

#### Vertex Buffer and Index Buffer

In order to represent a 2D or 3D object, mesh data structures (or mesh objects) take care of two things:

1. It stores 2D or 3D vertex coordinates in a vertex list called **vertex buffer**, i.e., (x,y) or (x, y, z), respectively. The vertices describe the geometric object.
2. It organizes the vertices with the help of an index list called **index buffer**. This buffer is used to arrange the vertices in a specific order, mostly in a triangular form, to describe the object's polygonal surface.

In the following illustration, a simple rectangular plane is described by four 3D vertices which are stored in a vertex buffer. The index buffer stores the arrangement of vertices reqiured to describe the triangulated mesh needed to represent the rectangle. Therefore, it stores the indices of the individual vertices. 

![vertex index buffer](imgs/vertex%20index%20buffer.png)
*Image source: https://www.e-reading-lib.com/chapter-amp.php/143437/58/andy-pike-directx-8-programming-tutorial.html*

As you can see, the first triangle is formed by the vertices 0, 1, 2 whereas the second triangle is formed by the vertices 3, 2, 1. 

The reason why two buffer lists are introduced to organize mesh representations is primarily twofold: First of all, every vertex (usually composed of 2 or 3 coordinate values) has to be stored only once. Second,  accessing and organizing indices, i.e., singular values, can be handled more efficiently. 

In OpenGL you can directly specify vertex and index buffer lists, but this is not possible for p5.js.  -->

### Additional Material

In the following links, you will find a couple of different approaches for triangle subdivision:

- [Subdivision looping](https://graphics.stanford.edu/~mdfisher/subdivision.html) 
- [Triangle Subdivision](http://www.cs.cmu.edu/afs/cs/academic/class/15462-s14/www/lec_slides/Subdivision.pdf)

To learn more about meshes and triangulation, please refer to the following article by scratchapixel
- [3d basic rendering](https://www.scratchapixel.com/lessons/3d-basic-rendering/rendering-3d-scene-overview/rendering-3d-scene)


--- 

# Assignments


- [Tyler Hobb's: Aesthetically Pleasing Triangle Subdivision](https://tylerxhobbs.com/essays/2017/aesthetically-pleasing-triangle-subdivision) -- Checkout this article by digital artist Tyler Hobbs on how to create aesthetically pleasing images with executing different forms of triangle subdivision on a geometric model, or, to be more precise, on the polygon mesh of the geometric model. Try this out on your own. Start with a simple 2D object like a rectangle and subdivide it into several triangles following a specific rule. 
- Check out the following 
