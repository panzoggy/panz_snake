const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const scoreEl = document.getElementById('score')!;
const restartBtn = document.getElementById('restart')!;

const GRID_SIZE = 20;
const TILE_COUNT = canvas.width / GRID_SIZE;

interface Position {
  x: number;
  y: number;
}

let snake: Position[] = [{ x: 10, y: 10 }];
let food: Position = { x: 15, y: 15 };
let dx = 0;
let dy = 0;
let score = 0;
let gameLoop: number;
let gameRunning = false;

function randomPosition(): Position {
  return {
    x: Math.floor(Math.random() * TILE_COUNT),
    y: Math.floor(Math.random() * TILE_COUNT)
  };
}

function spawnFood(): void {
  food = randomPosition();
  if (snake.some(seg => seg.x === food.x && seg.y === food.y)) {
    spawnFood();
  }
}

function update(): void {
  if (!gameRunning) return;

  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  if (head.x < 0 || head.x >= TILE_COUNT || head.y < 0 || head.y >= TILE_COUNT ||
      snake.some(seg => seg.x === head.x && seg.y === head.y)) {
    gameOver();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreEl.textContent = `Score: ${score}`;
    spawnFood();
  } else {
    snake.pop();
  }
}

function draw(): void {
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#e94560';
  ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);

  ctx.fillStyle = '#0f3460';
  snake.forEach((seg, i) => {
    ctx.fillStyle = i === 0 ? '#00d9ff' : '#0f3460';
    ctx.fillRect(seg.x * GRID_SIZE, seg.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
  });
}

function gameLoopFn(): void {
  update();
  draw();
  gameLoop = requestAnimationFrame(gameLoopFn);
}

function gameOver(): void {
  gameRunning = false;
  cancelAnimationFrame(gameLoop);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 30);
  ctx.fillText('Appuyez sur "Recommencer"', canvas.width / 2, canvas.height / 2 + 60);
  restartBtn.style.display = 'block';
}

function startGame(): void {
  snake = [{ x: 10, y: 10 }];
  dx = 1;
  dy = 0;
  score = 0;
  scoreEl.textContent = 'Score: 0';
  spawnFood();
  gameRunning = true;
  restartBtn.style.display = 'none';
  gameLoop = requestAnimationFrame(gameLoopFn);
}

document.addEventListener('keydown', (e) => {
  if (!gameRunning) return;
  switch (e.key) {
    case 'ArrowUp': if (dy !== 1) { dx = 0; dy = -1; } break;
    case 'ArrowDown': if (dy !== -1) { dx = 0; dy = 1; } break;
    case 'ArrowLeft': if (dx !== 1) { dx = -1; dy = 0; } break;
    case 'ArrowRight': if (dx !== -1) { dx = 1; dy = 0; } break;
  }
});

restartBtn.addEventListener('click', startGame);

startGame();