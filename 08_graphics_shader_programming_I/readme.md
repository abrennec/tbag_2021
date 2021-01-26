<!-- ---  
title: Theoretical Backgrounds of Audio and Graphics
author: Angela Brennecke
affiliation: Film University Babelsberg KONRAD WOLF
date: Winter term 20/21
---   -->
**Theoretical Backgrounds of Audio and Graphics - Winter term 20/21**

Prof. Dr.-Ing. Angela Brennecke | a.brennecke@filmuniversitaet.de | Film University Babelsberg *KONRAD WOLF*

---

- [Graphics -- Transformations](#graphics----transformations)
  - [Topics](#topics)
  - [Learning Objectives](#learning-objectives)
  - [Objects](#objects)
- [Shaders](#shaders)
  - [ofShader in openFrameworks](#ofshader-in-openframeworks)
    - [Shaders, Variables, GLSL Versions](#shaders-variables-glsl-versions)
    - [Important Variables Type Qualifiers](#important-variables-type-qualifiers)
- [Bibliography](#bibliography)
  - [Recap](#recap)
- [Further Reading](#further-reading)
- [Assignments](#assignments)

---


# Graphics -- Transformations


## Topics


1. The programmable rendering pipeline
2. Vertex shaders, geometry shaders, tesselation shaders, fragment shaders
3. OpenGL Shader Language
4. My first shader program
5. Project work


## Learning Objectives

- Students will learn 


## Objects

Geometric objects are almost always defined by two groups of properties:

- **Geometric parameters** to define the object's shape 
  and to position the object in the scene.
- **Materials** to define the object's shape and looks with the help of textures or visuals (color information) or specific material properties like reflectivity, mass, elasticity, for instance.

We will focus on geometric parameters here.


# Shaders

When the vertex data and all of the vertex specifications like color or texture are passed on to the rendering pipeline and the GPU, each vertex is processed, rasterized and finally written into the frame buffer. Shaders are small programs that can be executed on the GPU on a **per-vertex** and **per-pixel** basis to further enhance the rendering and image generation. In particular, there are two different shader types:

- **Vertex shader** to adjust and process the geometric vertex data and operate on one vertex at a time. 
  - Input: Vertex in world space
  - Output: Projected vertex position in clip space
- **Fragment shader** to adjust and process the rasterized fragment data and operate on one fragment at a time.
  - Input: Fragment
  - Output: Pixel color of the vertex

These are the programmable components of the graphics pipeline as illustrated below:

![rendering_pipeline](assets/rendering_pipeline.png)
_Image source: https://www.ntu.edu.sg/home/ehchua/programming/opengl/cg_basicstheory.html_

As you can see, the vertex shader will be executed first, the fragment shader will be executed subsequently. 

1. vertex shader 
2. fragment shader


In particular, a **vertext shader** takes care of the following:

> "A vertex shader processes each vertex of the rendered object and changes its properties, such as position, normal, color, and some custom attributes. It can be used for geometric transformations of 3D objects." [Denis Perevalov, "Mastering openFrameworks", Chap. 8].

In contrast, a **fragment shader** is resonsible for finally calculating the final pixel color:

> "A fragment shader processes the color and depth of a pixel which is ready to be rendered to the screen or screen buffer. A fragment shader can be used for implementing postprocessing effects, and also for more complex image processing and generation." [Denis Perevalov, "Mastering openFrameworks", Chap. 8].

If you want to use either a vertex or a fragment shader or both in your program, you need to specify and enable both of them. openFrameworks simplifies this process with the ofShader object.

## ofShader in openFrameworks

openFrameworks provides the **ofShader object** that allows for setting up and loading vertex, (geometry) and fragment shaders. openFrameworks supports the OpenGL shading language GLSL. 

```cpp
// Declare a shader object.
ofShader shader;

// ... 

// Load the actual shader files. By default openFrameworks
// will search for the shader files in the bin/data folder.
shader.load("shaders/vert.glsl", "shaders/frag.glsl");

// ...

// Now enable the shader by calling the begin() and end()
// functions upon it. Every mesh that is put inside these
// function calls will be processed by the shaders.
shader.begin();    
myMesh.draw();
shader.end();

```

### Shaders, Variables, GLSL Versions

When working with shaders, it is important to understand that - due to their nature as being components of the rendering pipeline - specific variables like, e.g., **gl_Vertex**, **gl_Position**, **gl_ModelViewProjectionMatrix**, **gl_FragColor**, etc., are **built-in variables** provided by the underlying OpenGL library! These variables are used to access and change OpenGL-specific function states although their use as fixed built-in values has been removed with latest GLSL versions. Nonetheless, older versions are widely supported on many systems which is why you should know about them. The list of built-in variables used by GLSL and OpenGL can be found at 
- https://www.khronos.org/registry/OpenGL-Refpages/gl4/index.php

As mentioned above, the use of the built-in variables, however, changed with latest GLSL versions. The GLSL version you can use depends on the OpenGL version supported on your system and graphics card. 
Here, we will be working with GLSL 1.2 which will work on most machines. An overview of OpenGL and GLSL versions can be found at 
- https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)

In order to find out about the OpenGL version supported on your platform, you can either run the openFrameworks example/gl/glInfoExample or start ProjectGenerator and select the OpenGL version you would like to use in the **Template** section. This will implicitly reveal which OpenGL will be supported on your system. 

### Important Variables Type Qualifiers

Basically, you will work with three different types of variable type qualifiers: 

- **Attributes**
  - Attribute variables are specifed and processed per vertex. They correspond to the internal OpenGL attribute settings. 
  - In openFrameworks, you can specify vertices by using the ofMesh class. The specified values are then handed over to the underlying OpenGL library for further processing which uses its pre-defined attribute variables to store the values internally and hands those over to the shader. 
  - Examples: gl_Vertex, gl_Color, gl_MultiTexCoord0, gl_Normal, ...
- **Uniform**
  - Uniform variables can be specified in the application (i.e., ofApp) and can be handed over to the shader program (ofShader) directly (compared to how attributes are processed, for instance). They are used to, for example, to hand over information interactively from the application to the shader program.
  - Univorm variables are applied to the entire primitive that is being processed.
  - Examples: User defined variables as well as dedicated OpenGL uniforms like gl_ProjectionMatrix, gl_ModelViewMatrix, gl_NormalMatrix, ...
- **Varying**
  - Varying variables can be used to exchange data between the shaders themselves; i.e., you can specify a varying variable in the vertex shader and retrieve the information inside of the fragment shader for further processing.
  - There are two sets of varying variables, one for the vertex and one for the fragment shader.
  - Examples: gl_Color, gl_TexCoord\[\], gl_FrontColor, ...
Variable type qualifiers can be used inside of your ofApp and be handed over to the shader programs for an execution on the GPU.

To learn more about shaders, please refer to the corresponding [chapter on shaders in the ofBook](https://openframeworks.cc/ofBook/chapters/shaders.html) and revisit the code examples. 

For more information on the latest list of shader types supported by OpenGL and latest GLSL version specifications, visit 
- https://www.khronos.org/registry/OpenGL/specs/gl/
- https://www.khronos.org/registry/OpenGL/index_gl.php

--- 

# Bibliography

## Recap 

Revise and Review

- [OpenGL & openFrameworks](https://openframeworks.cc/ofBook/chapters/openGL.html#meshes)
- [Meshes](https://openframeworks.cc/ofBook/chapters/openGL.html#meshes)
- [Shaders](https://openframeworks.cc/ofBook/chapters/shaders.html)
- [OpenGL GLSL Tutorial](https://www.opengl.org/sdk/docs/tutorials/TyphoonLabs/)

---

# Further Reading



--- 

# Assignments


