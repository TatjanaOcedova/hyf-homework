const displayS = document.getElementById("displayS");
const displayL = document.getElementById("displayL");
let sCounter = 0;
let lCounter = 0;

//count keys
function countKeyDown(key) {
  if (key.code === "KeyS") {
    sCounter += 1;
    displayS.innerText = sCounter;
  }
  if (key.code === "KeyL") {
    lCounter += 1;
    displayL.innerText = lCounter;
  }
}

//game timer
const gameTimer = document.getElementById("gameTimer");

function setCountDown(time) {
  gameTimer.innerText = time;
  let timeleft = time - 1;
  const downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
    }
    gameTimer.innerText = timeleft;
    timeleft -= 1;
  }, 1000);
}

//game message
const gameMessage = document.getElementById("gameMessage");

function gameDraw(message) {
  gameMessage.innerText = "Game result: " + message;
}

//start game
const startButton = document.getElementById("startButton");
const pressS = document.getElementById("pressS");
const pressL = document.getElementById("pressL");
const inputTime = document.getElementById("inputTime");
let gameDuration;

startButton.addEventListener("click", () => {
  gameDuration = parseInt(inputTime.value);
  if (!isNaN(gameDuration)) {
    setCountDown(gameDuration);
    startButton.disabled = true;
    setTimeout(() => {
      window.removeEventListener("keydown", countKeyDown);
      if (sCounter === 0 && lCounter === 0) {
        gameDraw("Please press key!");
      } else if (sCounter > lCounter) {
        confettiS.render();
        gameDraw("S key is a winner!");
      } else if (sCounter < lCounter) {
        confettiL.render();
        gameDraw("L key is a winner!");
      } else {
        gameDraw("Draw!");
      }
    }, gameDuration * 1000);
    window.addEventListener("keydown", countKeyDown);
  } else {
    gameDraw("Please enter time!");
  }
});

//confetti
const confettiFallingS = document.getElementById("my-canvas-s");
const confettiSettingsS = { target: "my-canvas-s", size: 2 };
const confettiS = new ConfettiGenerator(confettiSettingsS);

const confettiFallingL = document.getElementById("my-canvas-l");
const confettiSettingsL = { target: "my-canvas-l", size: 2 };
const confettiL = new ConfettiGenerator(confettiSettingsL);

//resetButton
//when the same player wins second time confetti element is not working
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  startButton.disabled = false;
  if (document.getElementById("my-canvas-s")) {
    document.getElementById("my-canvas-s").remove();
  } else if (document.getElementById("my-canvas-l")) {
    document.getElementById("my-canvas-l").remove();
  }
  sCounter = 0;
  lCounter = 0;
  gameMessage.innerText = "";
  displayS.innerText = "";
  displayL.innerText = "";
  inputTime.value = "";
  gameTimer.innerText = "";
  // confettiS.clear();
  // confettiL.clear();
});
