# Starfield 
This is modification of Daniel Shiffman's first lesson of "Coding Challenge', namely "Starfield in Processing". He had used p5.js library with Processing, while I had to use it with normal js language, excluding classes and many global variables.

We are flying by the night sky, all around the stars, like in a super starship.

My version allows not only regulating speed of stars, moving mouse from left to right (as Shiffman did), but also to change varrants by moving mouse vertically: if we are above, the first version remains (stars are circles of changing size), and if we move our mouse to the lower part of screen, the stars would become only dots and lines. 
The idea of Processing is to use a pair of functions: setup (create canvas and data) and draw - which is a function of updating data and can make animation.

There is an array of stars (one object type Star, not a class Star) in the separate file "star.js". The picture is updating continuously, using "update" function.

All ideas of Daniel Shiffman were realized. The program creates randomly 800 stars on a 800x800 canvas. The stars are groving and go from the centre to the external frontiers of the Universe. We can modify our speed and kind of view as above explained, simply by move a mouse cursor horizontally and vertically (original Shiffman's pattern: horizontally only).

jp.5 library included, although we may receive it from https://p5js.org/download/
