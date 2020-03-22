function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.walls = {
    top: true,
    right: true,
    bottom: true,
    left: true,
  };

  this.in = false;
  this.frontier = false;

  this.mark = function() {
    this.in = true;
  }

  this.markAsFrontier = function() {
    this.frontier = true;
  }

  this.getNeighbors = function() {
    const neighbors = [];

    const top = get(i, j - 1);
    const right = get(i + 1, j);
    const bottom = get(i, j + 1);
    const left = get(i - 1, j);

    if (top && top.in) {
      neighbors.push(top);
    }

    if (right && right.in) {
      neighbors.push(right);
    }

    if (bottom && bottom.in) {
      neighbors.push(bottom);
    }

    if (left && left.in) {
      neighbors.push(left);
    }

    return neighbors;
  }

  this.removeWalls = function(other) {
    const di = this.i - other.i;
    if (di === 1) {
      this.walls.top = false;
      other.walls.bottom = false;
    } else if (di === -1) {
      this.walls.bottom = false;
      other.walls.top = false;
    }

    const dj = this.j - other.j;
    if (dj === 1) {
      this.walls.left = false;
      other.walls.right = false;
    } else if (dj === -1) {
      this.walls.right = false;
      other.walls.left = false;
    }
  }

  this.render = function() {
    x = this.j * SIZE;
    y = this.i * SIZE;

    if (this.frontier) {
      ctx.fillStyle = COLORS.frontier;
      ctx.fillRect(x, y, SIZE, SIZE);
    }

    if (this.in) {
      ctx.fillStyle = COLORS.in;
      ctx.fillRect(x, y, SIZE, SIZE);
    }

    ctx.strokeStyle = COLORS.wall;
    if (this.walls.top) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + SIZE, y);
      ctx.stroke();
    }

    if (this.walls.right) {
      ctx.beginPath();
      ctx.moveTo(x + SIZE, y);
      ctx.lineTo(x + SIZE, y + SIZE);
      ctx.stroke();
    }

    if (this.walls.bottom) {
      ctx.beginPath();
      ctx.moveTo(x + SIZE, y + SIZE);
      ctx.lineTo(x, y + SIZE);
      ctx.stroke();
    }

    if (this.walls.left) {
      ctx.beginPath();
      ctx.moveTo(x, y + SIZE);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}
