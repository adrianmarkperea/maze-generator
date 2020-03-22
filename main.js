const WIDTH = 400;
const HEIGHT = 400;
const SIZE = 40;
const ROWS = HEIGHT / SIZE;
const COLS = WIDTH / SIZE;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

let grid;

function init() {
  grid = new Array(ROWS);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(COLS);
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }

  let i = Math.floor(Math.random() * ROWS);
  let j = Math.floor(Math.random() * COLS);

  grid[i][j].mark();
}

function draw() {
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].render();
    }
  }
}

init();
draw();

