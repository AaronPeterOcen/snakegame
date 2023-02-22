import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("board-game");

const main = (currTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currTime;

  update();

  draw();
};
window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
};

const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
};
