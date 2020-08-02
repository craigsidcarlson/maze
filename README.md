 # Craig's maze explorer
A procedural generated maze with a movable particle that maps the maze with ray tracing.

https://craigsidcarlson.github.io/maze/

# How to explore
Use the arrow keys to move around amd explore the maze. Refresh the page for a new maze.

Hold CTRL to cheat.

# Maze generation
The maze is generated using a depth first search algorithm.


# Ray tracing
You can explore the mazess with a small particle that emits rays in the fov. The fov is configurable in the code. The particle uses ray tracing to cast a point from the particle's location onto the closest wall, it casts two rays per degree within the fov. Once the section of the wall (boundary vector) has been seen it stays lite. 

The particle cannot pass through wall. This is done by analyzing the center ray being cast and determines if the distance to that boundary vector is less than the particle's movement amount.

# Future features
There is a lot more potential here:
  - Add ai to navigate it automatically (flocking maybe?)

# Resources
https://www.youtube.com/watch?v=HyK_Q5rrcr4 <br>
https://www.youtube.com/watch?v=TOEi6T2mtHo <br>
https://www.youtube.com/watch?v=vYgIKn7iDH8 <br>
https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection  <br>
https://github.com/joshforisha/open-simplex-noise-js <br>
