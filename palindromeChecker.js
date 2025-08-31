const input = document.getElementById("input");
const button = document.getElementById("checkButton");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  alert(reverse);
}
button.addEventListener("click", check);
