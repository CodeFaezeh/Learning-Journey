// red button
document.querySelector(".red").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Your Red!";
  //the gap between section color and whole body???
  // document.querySelector(".message").style.backgroundColor = "red";
  //move the button:when we choose red
  document.querySelector(".red").style.width = "100%";
  document.querySelector(".red").style.backgroundColor = "rgba(0, 0, 0, 1)";
  // when choose red, the blue would be get back to its previous style
  document.querySelector(".blue").style.width = "10%";
  document.querySelector(".blue").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  //left side(red secton) = red
  document.querySelector("#left").style.backgroundColor = "red";
  // when we choose blue and then red
  document.querySelector("#right").style.backgroundColor = "white";
  //what happend for hovering???
});
// blue button
document.querySelector(".blue").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Your Blue!";
  //the gap between section color and whole body???
  // document.querySelector(".message").style.backgroundColor = "blue";
  //move the button:when we choose blue
  document.querySelector(".blue").style.width = "100%";
  document.querySelector(".blue").style.backgroundColor = "rgba(0, 0, 0, 1)";
  // when choose blue, the red would be get back to its previous style
  document.querySelector(".red").style.width = "10%";
  document.querySelector(".red").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  //right side(blue section) = blue
  document.querySelector("#right").style.backgroundColor = "blue";
  // when we choose red and then blue
  document.querySelector("#left").style.backgroundColor = "white";
});
// reset hover effect
