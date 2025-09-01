const button = document.getElementById("generateQuote");
const quoteInput = document.getElementById("quoteInput");

quoteArray = [
  '"Whatever the mind of man can conceive and believe, it can achieve." - Napoleon Hill',
  '"Either you run the day, or the day runs you" - Jim Rohn',
  '"The happiness of your life depends on the quality of your thoughts." - Marcus Aurelius',
  '"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein',
  '"The greatest wealth is to live content with little." - Plato',
  '"The greatest mistake we make is living in constant fear that we will make one." - Henry Ford ',
  '"In three words I can sum up everything I\'ve learned about life: it goes on." - Robert Frost ',
];

function selectQuote() {
  const idx = Math.floor(Math.random() * quoteArray.length);
  quoteInput.value = quoteArray[idx];
}
button.addEventListener("click", selectQuote);
