const WIDTH = 400;
const HEIGHT = 400;
const SIZE = 20;
const ROWS = HEIGHT / SIZE;
const COLS = WIDTH / SIZE;

const COLORS = {
  bg: '#652ec7',
  wall: '#ffd300',
  frontier: '#de38c8',
  in: '#33135c',
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

let grid;
let frontiers = [];

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

  const cell = grid[i][j]
  cell.mark();

  addFrontiers(cell);
}

function draw() {
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].render();
    }
  }

  if (frontiers.length !== 0) {
    const randFrontierIndex = Math.floor(Math.random() * frontiers.length);
    const frontier = frontiers[randFrontierIndex];
    frontiers.splice(randFrontierIndex, 1);

    const neighbors = frontier.getNeighbors();
    const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];

    // if (neighbors.length > 1) {
    randomNeighbor.removeWalls(frontier);
    //}

    frontier.mark();
    addFrontiers(frontier);

    requestAnimationFrame(draw);
  }
}

init();
requestAnimationFrame(draw);

function get(i, j) {
  if (i < 0 || i >= ROWS || j < 0 || j>= COLS) {
    return;
  }

  return grid[i][j];
}

function addFrontiers(cell) {
  const i = cell.i;
  const j = cell.j;

  addFrontier(i - 1, j);
  addFrontier(i, j + 1);
  addFrontier(i + 1, j);
  addFrontier(i, j - 1);
}

function addFrontier(i, j) {
  const cell = get(i, j);

  if (!cell || cell.in || cell.frontier) {
    return;
  }

  cell.markAsFrontier();  
  frontiers.push(cell);
}
