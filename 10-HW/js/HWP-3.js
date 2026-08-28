let gameInterval;
let score = 0;
let clicks = 0;
let gameSeconds = 10;
let gameStarted = false;

function startGame() {
  clearInterval(gameInterval);

  score = 0;
  clicks = 0;
  gameSeconds = 10;
  gameStarted = true;

  document.getElementById("score").textContent = score;
  document.getElementById("clicks").textContent = clicks;
  document.getElementById("gameTime").textContent = gameSeconds;

  gameInterval = setInterval(function () {
    gameSeconds--;

    document.getElementById("gameTime").textContent = gameSeconds;

    if (gameSeconds <= 0) {
      clearInterval(gameInterval);

      gameStarted = false;

      alert(
        "Гру завершено!\n" +
          "Ваш результат: " +
          score +
          " очок\n" +
          "Кількість натискань: " +
          clicks,
      );
    }
  }, 1000);
}

function clickGameButton() {
  if (!gameStarted) {
    return;
  }

  clicks++;
  score++;

  document.getElementById("clicks").textContent = clicks;
  document.getElementById("score").textContent = score;
}
