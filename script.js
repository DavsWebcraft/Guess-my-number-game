"use strict";
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

displayMessage("!Try your luck 😁😎");
document.querySelector(".check").textContent = "Guess😊";
document.querySelector(".again").textContent = "Try Again🤗";
document.querySelector(".number").textContent = "🙈";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const numberGuess = Number(document.querySelector(".guess").value);

  if (!numberGuess) {
    displayMessage("⚠🚫 You didn't pick a number");
  } else if (numberGuess === secretNumber) {
    displayMessage("🎉😎You guessed right 🥰👏");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "20rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (numberGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        numberGuess > secretNumber
          ? "❌ Opps, try a lower number😔"
          : "⭕❗ Nah, pick something higher😉"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌Game Over 😓💔";
      document.querySelector(".number").textContent = "😭";
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
//   } else if (numberGuess > secretNumber) {
//   } else if (numberGuess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "❌Game Over 😓💔";
//       document.querySelector(".score").textContent = "0";
//       document.querySelector("body").style.backgroundColor = "red";
//     }
//   }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("!Try your luck 😁😎");
  document.querySelector(".number").textContent = "🙈";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
