let width, height;
let maze;
const cell_size = 40;
let next_index = 0;
function setup() {
  // width = windowWidth *0.95;
  // height = windowHeight*0.95;
  frameRate(5);
  width = 600;
  height = 400;
  const cnv = createCanvas(width, height);
  maze = new Maze(width, height, cell_size);
}
 
function draw() {
  background(51);
  for (let i  = 0; i < maze.cells.length; i++) {
    maze.cells[i].show();
  }
   
  next_index = maze.visitCell(next_index);

}

