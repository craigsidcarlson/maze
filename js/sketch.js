let width, height;
let maze;
const cell_size = 40;
let next_index = 0;
function setup() {
  // width = windowWidth *0.95;
  // height = windowHeight*0.95;
  width = 400;
  height = 400;
  const cnv = createCanvas(width, height);
  maze = new Maze(width, height, cell_size, next_index);
}
 
function draw() {
  background(51);
  for (let i  = 0; i < maze.cells.length; i++) {
    maze.cells[i].show();
  }
  maze.visitCell();
}

