//DOM
const redButton = document.querySelector(".red-btn");
const blueButton = document.querySelector(".blue-btn");
const message = document.querySelector(".message");
const leftSection = document.querySelector("#left");
const rightSection = document.querySelector("#right");
let clickNumberRed = 0;
let clickNumberBlue = 0;
// red button
redButton.addEventListener("click", function () {
  if (clickNumberRed === 0) {
    clickNumberRed = 1;
    redButton.style.width = "100%";
    redButton.style.backgroundColor = "rgba(0, 0, 0, 1)";
    leftSection.style.backgroundColor = "red";
  } else {
    clickNumberRed = 0;
    redButton.style.width = "5rem";
    redButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    leftSection.style.backgroundColor = "white";
  }
});
//the gap between section color and whole body???

// blue button
blueButton.addEventListener("click", function () {
  if (clickNumberBlue === 0) {
    clickNumberBlue = 1;
    blueButton.style.width = "100%";
    blueButton.style.backgroundColor = "rgba(0, 0, 0, 1)";
    rightSection.style.backgroundColor = "blue";
  } else {
    clickNumberBlue = 0;
    blueButton.style.width = "5rem";
    blueButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    rightSection.style.backgroundColor = "white";
  }
});
