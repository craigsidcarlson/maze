let width, height;
let maze;
const cell_size = 60;
let next_index = 0;
function setup() {
  width = 1200;
  height = 900;
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  const cnv = createCanvas(width, height);
  cnv.position(x, y);
  maze = new Maze(width, height, cell_size, next_index);
  while(maze.stack.length) maze.visitCell();
}
 
function draw() {
  background(51);
  for (let i  = 0; i < maze.cells.length; i++) {
    maze.cells[i].show();
  }
  noLoop();
  // maze.visitCell();
}

