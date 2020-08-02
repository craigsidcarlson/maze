class Cell {
  constructor(i, j, w, h) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.h = h;
    this.x = this.i*cell_size;
    this.y = this.j*cell_size;
    this.walls = [true, true, true, true];
    this.top = new Boundary(this.x, this.y, this.x+this.w, this.y);
    this.right = new Boundary(this.x+this.w, this.y, this.x+this.w, this.y+this.w);
    this.bottom = new Boundary(this.x, this.y+this.w, this.x+this.w, this.y+this.w);
    this.left  = new Boundary(this.x, this.y, this.x, this.y+this.w);
    this.visited = false;
    this.neighbors = []
  }

  show() {
    stroke(255);
    if (this.walls[0]) this.top.show();
    if (this.walls[1]) this.right.show();
    if (this.walls[2]) this.left.show();
    if (this.walls[3]) this.bottom.show();
    if (this.visited) {
      fill(255, 0, 255, 100);
      rect(this.x,this.y,this.w,this.h);
    }
  }
}