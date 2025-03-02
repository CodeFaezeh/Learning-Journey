const boxBlue = document.querySelector(".box--blue");
const btnBlue = document.querySelector(".btn--blue");
const boxRed = document.querySelector(".box--red");
const btnRed = document.querySelector(".btn--red");
const boxYellow = document.querySelector(".box--yellow");
const btnYellow = document.querySelector(".btn--yellow");
const boxBlack = document.querySelector(".box--black");
const btnBlack = document.querySelector(".btn--black");
//on-off counts
let countBlue = 0;
let countRed = 0;
let countYellow = 0;
let countBlack = 0;
//functions:
btnBlue.addEventListener("click", function () {
  if (countBlue === 0) {
    countBlue = 1;
    boxBlue.style.backgroundColor = "blue";
  } else {
    boxBlue.style.backgroundColor = "white";
    countBlue = 0;
  }
});
btnRed.addEventListener("click", function () {
  if (countRed === 0) {
    countRed = 1;
    boxRed.style.backgroundColor = "red";
  } else {
    countRed = 0;
    boxRed.style.backgroundColor = "white";
  }
});
btnYellow.addEventListener("click", function () {
  if (countYellow === 0) {
    countYellow = 1;
    boxYellow.style.backgroundColor = "yellow";
  } else {
    countYellow = 0;
    boxYellow.style.backgroundColor = "white";
  }
});
btnBlack.addEventListener("click", function () {
  if (countBlack === 0) {
    countBlack = 1;
    boxBlack.style.backgroundColor = "black";
  } else {
    countBlack = 0;
    boxBlack.style.backgroundColor = "white";
  }
});
