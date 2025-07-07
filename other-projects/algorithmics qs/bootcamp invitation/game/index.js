const X = "X";
const O = "O";
const N = 5;
const WINNER_O = "OW",
  WINNER_X = "XW",
  TIE = "XO";
const getInitialBoard = () =>
  Array(N)
    .fill("")
    .map((v) => [...Array(N).fill("")]);

const initialTurn = X;

const blocks = Array.from(document.getElementsByClassName("block"));
const turnDisplay = document.getElementById("turn");
const winnerDisplay = document.getElementById("winner");
const undoBtn = document.getElementById("undo");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
const timerDisplay = document.getElementById("timer");

let board = getInitialBoard();
let turn = initialTurn;
let undoCounter = 0;
let timer = 10;
let timerInterval;

const canFillBlock = (row, col) => {
  return board[row][col] === "";
};

const fillBlock = (block, row, col) => {
  board[row][col] = turn;
  block.textContent = turn;
};

const toggleTurn = () => {
  turn = turn === X ? O : X;
  if (turnDisplay) {
    turnDisplay.textContent = `${turn}`;
  }
  resetTimer();
  startTimer();
};
const announceResult = (type) => {
  winnerDisplay.classList.remove("hide");
  switch (type) {
    case WINNER_X:
      winnerDisplay.textContent = "X is the winner 🎉🎉🎉";
      break;
    case WINNER_O:
      winnerDisplay.textContent = "O is the winner 🎉🎉🎉";
      break;
    case TIE:
      winnerDisplay.textContent = "Tie 🤝";
      break;
  }
};

const isTied = () => {
  const n_playedRounds = board.flat().filter((cell) => cell !== "").length;
  if (n_playedRounds === N * N) return true;
  return false;
};

const getWinner = () => {
  const checkLine = (val1, val2, val3, val4) => {
    return val1 !== "" && val1 === val2 && val2 === val3 && val3 === val4;
  };
  // --- 1. Check Horizontal Wins (Rows) ---
  for (let r = 0; r < N; r++) {
    //r stands for row
    for (let c = 0; c <= N - 4; c++) {
      // c stands for column
      if (
        checkLine(
          board[r][c],
          board[r][c + 1],
          board[r][c + 2],
          board[r][c + 3]
        )
      ) {
        return { hasWinner: true, winner: board[r][c] };
      }
    }
  }
  // --- 2. Check Vertical Wins (Columns) ---
  for (let c = 0; c < N; c++) {
    for (let r = 0; r <= N - 4; r++) {
      if (
        checkLine(
          board[r][c],
          board[r + 1][c],
          board[r + 2][c],
          board[r + 3][c]
        )
      ) {
        return { hasWinner: true, winner: board[r][c] };
      }
    }
  }
  // --- 3. Check (Top-Left to Bottom-Right) ---
  for (let r = 0; r <= N - 4; r++) {
    for (let c = 0; c <= N - 4; c++) {
      if (
        checkLine(
          board[r][c],
          board[r + 1][c + 1],
          board[r + 2][c + 2],
          board[r + 3][c + 3]
        )
      ) {
        return { hasWinner: true, winner: board[r][c] };
      }
    }
  }

  // --- 4. Check  (Top-Right to Bottom-Left) ---
  for (let r = 0; r <= N - 4; r++) {
    for (let c = N - 1; c >= 3; c--) {
      if (
        checkLine(
          board[r][c],
          board[r + 1][c - 1],
          board[r + 2][c - 2],
          board[r + 3][c - 3]
        )
      ) {
        return { hasWinner: true, winner: board[r][c] };
      }
    }
  }

  // If no winner is found after checking all types of lines:
  return {
    hasWinner: false,
    winner: null,
  };
};

const handleBlockClick = (block, row, col) => {
  if (canFillBlock(row, col)) {
    fillBlock(block, row, col);
    const { hasWinner, winner } = getWinner();
    if (hasWinner) {
      announceResult(winner === X ? WINNER_X : WINNER_O);
      setTimeout(resetBoard, 2000);
      return;
    }
    if (isTied()) {
      announceResult(TIE);
      setTimeout(resetBoard, 2000);
      return;
    }
    toggleTurn();
  }
};

const resetBoard = () => {
  board = getInitialBoard();
  turn = initialTurn;
  blocks.forEach((block) => {
    block.textContent = "";
  });
  if (turnDisplay) {
    turnDisplay.textContent = ` ${initialTurn}`;
  }
  if (winnerDisplay) {
    winnerDisplay.textContent = "";
    winnerDisplay.classList.add("hide");
  }
  resetTimer();
  startTimer();
};

const handleSaveGame = () => {
  // todo: saving game state functionality
};

const handleLoadGame = () => {
  // todo: load saved game
};

const handleUndoClick = () => {
  // todo: undo functionality logic
};

const startTimer = () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer--;
    if (timerDisplay) {
      timerDisplay.textContent = ` ${timer}`;
    }

    if (timer <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Switching turn.");
      toggleTurn();
    }
  }, 1000);
};

const resetTimer = () => {
  clearInterval(timerInterval);
  timer = 10;
  if (timerDisplay) {
    timerDisplay.textContent = ` ${timer}`;
  }
};

// DO NOT DELETE THIS CODE BLOCK
blocks.forEach((block, index) => {
  const row = Math.floor(index / N);
  const col = index % N;
  block.addEventListener("click", () => handleBlockClick(block, row, col));
});

undoBtn.addEventListener("click", handleUndoClick);
saveBtn.addEventListener("click", handleSaveGame);
loadBtn.addEventListener("click", handleLoadGame);
