class Maze {
  constructor(w, h, cs) {
    this.cell_size = cs;
    this.width = w;
    this.height = h;
    this.cols = floor(this.width/this.cell_size);
    this.rows = floor(this.height/this.cell_size);
    this.cells = [];
    this.current = this.cells[0];

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.cells.push(new Cell(i, j, this.cell_size, this.cell_size));
      }
    }
  }

  visitCell(index) {
    debugger;
    this.cells[index].visited = true;
    this.current = this.cells[index];
    this.checkCellNeighbors(this.current.i, this.current.j);
    if (this.current.neighbors.length > 0) {
      const random_neighbor = floor(random(0, this.current.neighbors.length));
      const next_index = this.current.neighbors[random_neighbor];
      // this.visitCell(next_index);
      return next_index;
    }
  }

  checkCellNeighbors(i,j) {
    this.current.neighbors = [];
    this.checkTop(i, j);
    this.checkRight(i, j);
    this.checkBottom(i, j);
    this.checkLeft(i, j);
  }
  checkTop(i, j) {
    const top_index = this.getCellIndex(i, j-1);
    if(!top_index) return;
    const top = this.cells[top_index];
    if (!top.visited) this.current.neighbors.push(top_index);
  }

  checkRight(i, j) {
    const right_index = this.getCellIndex(i+1, j);
    if(!right_index) return;
    const right = this.cells[right_index];
    if (!right.visited) this.current.neighbors.push(right_index);
  }
  
  checkBottom(i, j) {
    const bottom_index = this.getCellIndex(i, j + 1);
    if(!bottom_index) return;
    const bottom = this.cells[bottom_index];
    if (!bottom.visited) this.current.neighbors.push(bottom_index);
  }
  checkLeft(i, j) {
    const left_index = this.getCellIndex(i-1, j);
    if(!left_index) return;
    const left = this.cells[left_index];
    if (!left.visited) this.current.neighbors.push(left_index);
  }

  getCellIndex(i, j) {
    if ( i < 0 || j < 0 || i > this.rows || j > this.cols) return null;
    return j + i * this.rows;
  }
}