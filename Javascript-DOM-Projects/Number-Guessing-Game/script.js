let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  let guess = document.getElementById("guess").value;
  let result = document.getElementById("result");

  attempts++;

  if (guess == randomNumber) {
    result.innerHTML = "🎉 Correct! Number was " + randomNumber;
  } else if (guess < randomNumber) {
    result.innerHTML = "Too Low!";
  } else {
    result.innerHTML = "Too High!";
  }

  document.getElementById("attempts").innerHTML = "Attempts: " + attempts;
}

function restart() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;

  document.getElementById("result").innerHTML = "";
  document.getElementById("attempts").innerHTML = "Attempts: 0";
  document.getElementById("guess").value = "";
}
