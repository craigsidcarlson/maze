class Maze {
  constructor(w, h, cs) {
    this.cell_size = cs;
    this.width = w;
    this.height = h;
    this.cols = floor(this.width/this.cell_size);
    this.rows = floor(this.height/this.cell_size);
    this.cells = [];
    this.current = this.cells[0];
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.cells.push(new Cell(r, c, this.cell_size, this.cell_size));
      }
    }
  }

  visitCell(index) {
    this.cells[index].visited = true;
    this.current = this.cells[index];
    this.checkCellNeighbors(this.current.r, this.current.c);
    if (this.current.neighbors.length > 0) {
      const random_neighbor = floor(random(0, this.current.neighbors.length));
      const next_index = this.current.neighbors[random_neighbor];
      // this.visitCell(next_index);
      return next_index;
    }
  }

  checkCellNeighbors(r,c) {
    this.current.neighbors = [];
    this.checkTop(r, c);
    this.checkRight(r, c);
    this.checkBottom(r, c);
    this.checkLeft(r, c);
  }
  checkTop(r, c) {
    const top_index = this.getCellIndex(r-1, c);
    if(!top_index) return;
    const top = this.cells[top_index];
    if (!top.visited) this.current.neighbors.push(top_index);
  }

  checkRight(r, c) {
    const right_index = this.getCellIndex(r, c+1);
    if(!right_index) return;
    const right = this.cells[right_index];
    if (!right.visited) this.current.neighbors.push(right_index);
  }
  
  checkBottom(r, c) {
    const bottom_index = this.getCellIndex(r-1, c);
    if(!bottom_index) return;
    const bottom = this.cells[bottom_index];
    if (!bottom.visited) this.current.neighbors.push(bottom_index);
  }
  checkLeft(r, c) {
    const left_index = this.getCellIndex(r, c-1);
    if(!left_index) return;
    const left = this.cells[left_index];
    if (!left.visited) this.current.neighbors.push(left_index);
  }

  getCellIndex(r, c) {
    if ( c < 0 || r < 0 || r > this.rows - 1 || c > this.cols - 1) return null;
    return c + (r * this.cols);
  }
}