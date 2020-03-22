function Cell(x, y) {
  this.x = x;
  this.y = y;

  this.walls = {
    top: true,
    right: true,
    bottom: true,
    left: true,
  };

  this.in = false;
  this.frontier = false;

  this.render = function(ctx) {
    ctx.fillRect(this.y*SIZE, this.x*SIZE, SIZE, SIZE);   
  }
}
