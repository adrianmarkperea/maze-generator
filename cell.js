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

  this.render = function() {
    x = this.j * SIZE;
    y = this.i * SIZE;

    if (this.in) {
      ctx.fillStyle = '#f0eb8999';
      ctx.fillRect(x, y, SIZE, SIZE);
    }

    ctx.strokeStyle = '#ff737344';
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
