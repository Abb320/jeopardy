// Global selected game name
let game = null;

// Build the start screen buttons
(function initStart() {
  const btnWrap = document.getElementById("gameButtons");
  GAMES.forEach(g => {
    const b = document.createElement("button");
    b.className = "game-btn";
    b.innerHTML = `<span class="topic">${g.topic}</span>`;
    b.addEventListener("click", () => selectGame(g.topic));
    btnWrap.appendChild(b);
  });
})();

function selectGame(topicName) {
  game = topicName; // required global
  document.getElementById("start").classList.add("hidden");
  document.getElementById("boardScreen").classList.remove("hidden");
  document.getElementById("selectedGame").textContent = topicName;

  const gameObj = GAMES.find(g => g.topic === topicName);
  renderBoard(gameObj);
  GameLogic.attachGame(gameObj); // hand the data to the logic layer
}

function getCategoryNames(gameObj) {
  return Object.keys(gameObj.categories).slice(0, 5); // exactly 5
}

function renderBoard(gameObj) {
  const board = document.getElementById("board");
  board.innerHTML = "";

  const catNames = getCategoryNames(gameObj);

  // Top row: category labels (5)
  catNames.forEach(name => {
    const div = document.createElement("div");
    div.className = "cat";
    div.textContent = name;
    board.appendChild(div);
  });

  // Value rows: 100..500
  const values = [100, 200, 300, 400, 500];

  for (let r = 0; r < values.length; r++) {
    for (let c = 0; c < catNames.length; c++) {
      const btn = document.createElement("button");
      btn.className = "tile";
      btn.textContent = `$${values[r]}`;
      btn.dataset.cat = catNames[c];
      btn.dataset.row = String(r); // 0..4
      btn.addEventListener("click", () => {
        // Delegate to the logic file
        GameLogic.openQuestion({
          catName: catNames[c],
          rowIndex: r,
          value: values[r],
          tileEl: btn
        });
      });
      board.appendChild(btn);
    }
  }
}

// Back button
document.getElementById("backBtn").addEventListener("click", () => {
  document.getElementById("boardScreen").classList.add("hidden");
  document.getElementById("start").classList.remove("hidden");
  document.getElementById("board").innerHTML = "";
});
