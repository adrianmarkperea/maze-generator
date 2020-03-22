const WIDTH = 400;
const HEIGHT = 400;
const SIZE = 40;
const ROWS = HEIGHT / SIZE;
const COLS = WIDTH / SIZE;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

const grid = new Array(ROWS);

init();
draw();

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

function init() {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(COLS);
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = new Cell(j, i);
    }
  }
}

function draw() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].render(ctx);
    }
  }
}
