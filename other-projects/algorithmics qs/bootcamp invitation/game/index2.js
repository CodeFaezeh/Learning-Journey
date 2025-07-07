const X = "X";
const O = "O";
const N = 5;
const WINNER_O = "OW",
  WINNER_X = "XW",
  TIE = "XO";

const getInitialBoard = () =>
  Array(N)
    .fill("")
    .map(() => Array(N).fill(""));

const initialTurn = X;
const MAX_UNDO = 2;

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
let moveHistory = []; // برای undo
let timer = 10;
let timerInterval;

// -------------- تایمر --------------
const resetTimer = () => {
  clearInterval(timerInterval);
  timer = 10;
  timerDisplay.textContent = timer;
};

const startTimer = () => {
  resetTimer();
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
      alert("زمان تموم شد! نوبت تغییر کرد.");
      toggleTurn();
    }
  }, 1000);
};

// -------------- لاجیک بازی --------------
const canFillBlock = (row, col) => board[row][col] === "";

const fillBlock = (block, row, col) => {
  board[row][col] = turn;
  block.textContent = turn;
  block.classList.add(turn);
  moveHistory.push({ row, col, player: turn });
};

const toggleTurn = () => {
  turn = turn === X ? O : X;
  turnDisplay.textContent = `نوبت: ${turn}`;
  startTimer();
};

const announceResult = (type) => {
  clearInterval(timerInterval);
  switch (type) {
    case WINNER_X:
      winnerDisplay.textContent = "🎉 بازیکن X برنده شد!";
      break;
    case WINNER_O:
      winnerDisplay.textContent = "🎉 بازیکن O برنده شد!";
      break;
    case TIE:
      winnerDisplay.textContent = "🤝 مساوی!";
      break;
  }
};

const isTied = () => {
  let n_playedRounds = board.flat().filter((v) => v !== "").length;
  return n_playedRounds === N * N;
};

// --------- چک برنده با ۴ تایی ---------
const checkDirection = (row, col, dr, dc, player) => {
  let count = 0;
  for (let i = -3; i <= 3; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    if (r >= 0 && r < N && c >= 0 && c < N && board[r][c] === player) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }
  return false;
};

const getWinner = () => {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const player = board[row][col];
      if (!player) continue;
      if (
        checkDirection(row, col, 0, 1, player) ||
        checkDirection(row, col, 1, 0, player) ||
        checkDirection(row, col, 1, 1, player) ||
        checkDirection(row, col, 1, -1, player)
      ) {
        return { hasWinner: true, winner: player };
      }
    }
  }
  return { hasWinner: false, winner: null };
};

// ---------- کلیک روی بلوک ----------
const handleBlockClick = (block, row, col) => {
  if (!canFillBlock(row, col)) return;
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
};

// ---------- ریست کل بازی ----------
const resetBoard = () => {
  board = getInitialBoard();
  turn = initialTurn;
  moveHistory = [];
  undoCounter = 0;
  undoBtn.disabled = false;
  winnerDisplay.textContent = "";
  turnDisplay.textContent = `نوبت: ${turn}`;
  blocks.forEach((b) => {
    b.textContent = "";
    b.classList.remove(X, O);
  });
  startTimer();
};

// ---------- Undo ----------
const handleUndoClick = () => {
  if (undoCounter >= MAX_UNDO) {
    undoBtn.disabled = true;
    return;
  }
  if (moveHistory.length === 0) return;

  const lastMove = moveHistory.pop();
  board[lastMove.row][lastMove.col] = "";
  const index = lastMove.row * N + lastMove.col;
  blocks[index].textContent = "";
  blocks[index].classList.remove(X, O);

  turn = lastMove.player;
  turnDisplay.textContent = `نوبت: ${turn}`;
  undoCounter++;
  if (undoCounter >= MAX_UNDO) undoBtn.disabled = true;
  startTimer();
};

// ---------- ذخیره ----------
const handleSaveGame = () => {
  board = getInitialBoard();
  turn = initialTurn;
  moveHistory = [];
  undoCounter = 0;
  undoBtn.disabled = false;
  winnerDisplay.textContent = "";
  turnDisplay.textContent = `نوبت: ${turn}`;
  blocks.forEach((b) => {
    b.textContent = "";
    b.classList.remove(X, O);
  });
  startTimer();
};

// ---------- لود ----------
const handleLoadGame = () => {
  const data = JSON.parse(localStorage.getItem("tic5x5Save"));
  if (!data) return alert("هیچ بازی ذخیره‌شده‌ای یافت نشد!");

  board = data.board;
  turn = data.turn;
  moveHistory = data.moveHistory;
  undoCounter = data.undoCounter;
  timer = data.timer;

  blocks.forEach((block, index) => {
    const row = Math.floor(index / N);
    const col = index % N;
    block.textContent = board[row][col];
    block.classList.remove(X, O);
    if (board[row][col]) {
      block.classList.add(board[row][col]);
    }
  });

  turnDisplay.textContent = `نوبت: ${turn}`;
  winnerDisplay.textContent = "";
  undoBtn.disabled = undoCounter >= MAX_UNDO;
  startTimer();
};

// ---------- وصل کردن کلیک‌ها ----------
blocks.forEach((block, index) => {
  const row = Math.floor(index / N);
  const col = index % N;
  block.addEventListener("click", () => handleBlockClick(block, row, col));
});

undoBtn.addEventListener("click", handleUndoClick);
saveBtn.addEventListener("click", handleSaveGame);
loadBtn.addEventListener("click", handleLoadGame);

// ---------- شروع اولیه ----------
turnDisplay.textContent = `نوبت: ${turn}`;
startTimer();
//////////////////////////////////////////////////
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
  turnDisplay.textContent = `${turn}`;
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
  const n_playedRounds = board.flat(5).filter((tile) => tile !== "").length;
  return false;
};

const checkDirection = (row, col, dirx, diry, player) => {
  let count = 0;
  for (let i = -3; i <= 3; i++) {
    const r = row + dirx * i;
    const c = col + diry * i;
    if (r >= 0 && r < N && c >= 0 && c < N && board[r][c] === player) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }
  return false;
};

const getWinner = () => {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const player = board[row][col];
      if (!player) continue;
      if (
        checkDirection(row, col, 0, 1, player) ||
        checkDirection(row, col, 1, 0, player) ||
        checkDirection(row, col, 1, 1, player) ||
        checkDirection(row, col, 1, -1, player)
      ) {
        return { hasWinner: true, winner: player };
      }
    }
  }
  return { hasWinner: false, winner: null };
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
  board = getInitialBoard();
  turn = initialTurn;
  undoCounter = 0;
  undoBtn.disabled = false;
  winnerDisplay.textContent = "";
  turnDisplay.textContent = `${turn}`;
  blocks.forEach((b) => {
    b.textContent = "";
    b.classList.remove(X, O);
  });
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
  resetTimer();
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
      alert("Time is OVER!!!");
      toggleTurn();
    }
  }, 1000);
};

const resetTimer = () => {
  clearInterval(timerInterval);
  timer = 10;
  timerDisplay.textContent = timer;
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
