const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const blueButton = document.querySelector("#blue");
const randomButton = document.querySelector("#random");

const body = document.getElementsByTagName("body")[0];

redButton.addEventListener("click", function (e) {
  body.style.backgroundColor = "red";
});
greenButton.addEventListener("click", function (e) {
  body.style.backgroundColor = "green";
});
blueButton.addEventListener("click", function (e) {
  body.style.backgroundColor = "blue";
});

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}

randomButton.addEventListener("click", function (e) {
  randomColor();
});
