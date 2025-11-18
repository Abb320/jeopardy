// game-logic.js
(function () {
  let currentGame = null;
  let currentCtx = null; // {catName,rowIndex,value,tileEl,correctAnswer,wasCorrect}

  const qs = (id) => document.getElementById(id);

  // Screens
  const scrBoard  = qs("boardScreen");
  const scrQA     = qs("questionScreen");
  const scrResult = qs("resultScreen");

  // QA elements
  const elCat    = qs("qaCat");
  const elVal    = qs("qaVal");
  const elQ      = qs("qaQuestion");
  const elInp    = qs("qaInput");
  const elSubmit = qs("qaSubmit");

  // Result elements
  const elResCat  = qs("resCat");
  const elResVal  = qs("resVal");
  const elResText = qs("resText");
  const elResBack = qs("resBack");

  function attachGame(gameObj) {
    currentGame = gameObj;
  }

  // Lowercase + remove ALL whitespace
  function normalize(s) {
    return (s ?? "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ""); // strip spaces
  }

  function nthQuestionPair(catName, rowIndex) {
    const cat = (currentGame && currentGame.categories && currentGame.categories[catName]) || {};
    const entries = Object.entries(cat); // insertion order
    const pair = entries[rowIndex] || ["", ""];
    return { question: pair[0], answer: pair[1] };
  }

  function openQuestion({ catName, rowIndex, value, tileEl }) {
    if (!currentGame) return;

    const { question, answer } = nthQuestionPair(catName, rowIndex);
    currentCtx = { catName, rowIndex, value, tileEl, correctAnswer: answer, wasCorrect: false };

    // Fill QA UI
    elCat.textContent = catName;
    elVal.textContent = `$${value}`;
    elQ.textContent = question || "(No question found)";
    elInp.value = "";

    // Show QA screen
    scrBoard.classList.add("hidden");
    scrResult.classList.add("hidden");
    scrQA.classList.remove("hidden");

    // focus input next tick
    setTimeout(() => elInp.focus(), 0);
  }

  function submitAnswer() {
    if (!currentCtx) return;
    const user = normalize(elInp.value);
    const expected = normalize(currentCtx.correctAnswer);

    // Disable tile regardless (single-attempt behavior)
    if (currentCtx.tileEl) currentCtx.tileEl.disabled = true;

    // Decide correctness (if no expected is configured, treat as incorrect for turn logic)
    let text;
    let correct = false;

    if (!expected) {
      text = "No answer configured for this question.";
      correct = false;
    } else if (user === expected) {
      text = "✅ Correct!";
      correct = true;
    } else {
      text = `❌ Incorrect.\nCorrect answer: ${currentCtx.correctAnswer}`;
      correct = false;
    }

    currentCtx.wasCorrect = correct;

    // Apply scoring to the current player
    PlayerLogic.applyResult(correct, currentCtx.value);

    // Fill result UI
    elResCat.textContent = currentCtx.catName;
    elResVal.textContent = `$${currentCtx.value}`;
    elResText.textContent = text;

    // Swap QA → Result
    scrQA.classList.add("hidden");
    scrResult.classList.remove("hidden");
  }

  function backToBoard() {
    // Switch turns ONLY if the last answer was incorrect
    if (currentCtx && !currentCtx.wasCorrect) {
      PlayerLogic.nextTurn();
    }
    scrResult.classList.add("hidden");
    scrBoard.classList.remove("hidden");
    currentCtx = null;
  }

  // Wire buttons
  elSubmit.addEventListener("click", submitAnswer);
  elResBack.addEventListener("click", backToBoard);

  elInp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitAnswer();
  });

  // Public API
  window.GameLogic = {
    attachGame,
    openQuestion
  };
})();
