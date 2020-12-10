const gameDiv = document.getElementById("game");
// const dino = document.getElementById("dino");
// const rock = document.getElementById("rock");
const score = document.getElementById("score");
const buttons = document.getElementsByTagName("button");
let difficulty = "undecided";
console.log(buttons);
console.log(difficulty);

gameDiv.innerHTML = renderGame(difficulty);

function handleDifficutly(button) {
  buttonValue = button.innerHTML;
  if (buttonValue === "Easy") {
    gameDiv.innerHTML = renderGame(buttonValue);
    gameLoop(buttonValue);
  } else if (buttonValue === "Medium") {
    gameDiv.innerHTML = renderGame(buttonValue);
    gameLoop(buttonValue);
  } else {
    gameDiv.innerHTML = renderGame(buttonValue);
    gameLoop(buttonValue);
  }
}

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function () {
    handleDifficutly(button);
  });
}

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() => {
    dino.classList.remove("jump-animation");
  }, 500);
}

document.addEventListener("keypress", () => {
  if (!dino.classList.contains("jump-animation")) {
    jump();
  }
});

const gameLoop = (difficulty) => {
  let dino = document.getElementById("dino");
  let rock1 = document.getElementById("rock");
  let rock2 = document.getElementById("rock2");
  let rock3 = document.getElementById("rock3");
  if (difficulty === "Easy") {
    setInterval(() => {
      finalScore = score.innerText;
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
      );
      let rockLeft = parseInt(
        window.getComputedStyle(rock1).getPropertyValue("left")
      );
      if (rockLeft < 0) {
        rock.style.display = "none";
        score.innerText++;
      } else {
        rock.style.display = "";
      }

      if (rockLeft < 145 && rockLeft > 100 && dinoTop > 150) {
        alert(`You got a final score of: ${finalScore}. Play again?`);
        location.reload();
        return;
      }
    }, 50);
  } else if (difficulty === "Medium") {
    setInterval(() => {
      finalScore = score.innerText;
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
      );
      let rockLeft = parseInt(
        window.getComputedStyle(rock1).getPropertyValue("left")
      );
      let rockLeft2 = parseInt(
        window.getComputedStyle(rock2).getPropertyValue("left")
      );

      looseConditionOne = rockLeft < 145 && rockLeft > 100 && dinoTop > 165;
      looseConditionTwo = rockLeft2 < 145 && rockLeft2 > 100 && dinoTop > 165;

      console.log("rock 1", rockLeft);
      console.log("rock 2", rockLeft2);
      console.log("dino", dinoTop);

      if (rockLeft < 0) {
        rock.style.display = "none";
        score.innerText++;
      } else {
        rock.style.display = "";
      }

      if (rockLeft2 < 0) {
        rock.style.display = "none";
        score.innerText++;
      } else {
        rock.style.display = "";
      }
      if (looseConditionOne || looseConditionTwo) {
        alert(`You got a final score of: ${finalScore}. Play again?`);
        location.reload();
        return;
      }
    }, 50);
  } else {
    setInterval(() => {
      finalScore = score.innerText;
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
      );
      let rockLeft = parseInt(
        window.getComputedStyle(rock1).getPropertyValue("left")
      );
      let rockLeft2 = parseInt(
        window.getComputedStyle(rock2).getPropertyValue("left")
      );
      let rockLeft3 = parseInt(
        window.getComputedStyle(rock3).getPropertyValue("left")
      );

      looseConditionOne = rockLeft < 140 && rockLeft > 100 && dinoTop > 165;
      looseConditionTwo = rockLeft2 < 140 && rockLeft2 > 100 && dinoTop > 165;
      looseConditionThree = rockLeft3 < 140 && rockLeft3 > 100 && dinoTop > 165;

      console.log("rock 1", rockLeft);
      console.log("rock 2", rockLeft2);

      console.log("dino", dinoTop);

      if (rockLeft < 0 && !looseConditionOne) {
        rock.style.display = "none";
        score.innerText++;
      } else {
        rock.style.display = "";
      }
      if (looseConditionOne || looseConditionTwo || looseConditionThree) {
        alert(`You got a final score of: ${finalScore}. Play again?`);
        location.reload();
        return;
      }
    }, 50);
  }
};

function renderGame(difficulty) {
  if (difficulty === "undecided") {
    return `
      <div id='difficulty'>
        <h1>The Dino Rides</h1>
        <p>Press 's' or 'j' to jump</p>
        <p>Choose Difficulty</p>
        <button>Easy</button>
        <button>Medium</button>
        <button>PREHISTORIC</button>
      </div>
    `;
  } else if (difficulty === "Easy") {
    return `
      <div id="dino"></div>
      <div id="rock"></div>
    `;
  } else if (difficulty === "Medium") {
    return `
      <div id="dino"></div>
      <div id="rock"></div>
      <div id="rock2"></div>`;
  } else {
    return `
    <div id="dino"></div>
    <div id="rock"></div>
    <div id="rock2"></div>
    <div id="rock3"></div>`;
  }
}
