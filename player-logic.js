// player-logic.js
(function () {

  let scores = [0, 0];    // Player 1, Player 2
  let current = 0;        // Whose turn (0 or 1)

  const p1ScoreEl = document.getElementById("p1Score");
  const p2ScoreEl = document.getElementById("p2Score");
  const p1El = document.getElementById("p1");
  const p2El = document.getElementById("p2");
  const turnIndicatorEl = document.getElementById("turnIndicator");

  function updateUI() {
    p1ScoreEl.textContent = scores[0];
    p2ScoreEl.textContent = scores[1];

    p1El.classList.toggle("active", current === 0);
    p2El.classList.toggle("active", current === 1);

    turnIndicatorEl.textContent = (current === 0)
      ? "Player 1's Turn"
      : "Player 2's Turn";
  }

  function applyResult(isCorrect, value) {
    if (isCorrect) {
      scores[current] += value;
    } else {
      scores[current] -= value;
    }
    updateUI();
  }

  function nextTurn() {
    current = (current === 0) ? 1 : 0;
    updateUI();
  }

  // Public API
  window.PlayerLogic = {
    applyResult,
    nextTurn
  };

  updateUI();
})();
