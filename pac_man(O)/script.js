// List of features to build
// 1) Have JS display the world of brick/coin/etc - Done!!!!
// 2) Have the pacman move up and down - Done!!!!
// 3) Get Cherries to appear. Cherry = 50 pts. - Done!!!!
// 4) Get Pacman look up/down/left/right - Done!!!!
// 5) Get a ghost to show up (Not moving) - Done!!!!
// 6) Get the ghost to move around in random directions -
// 7) Get two Pacmans to show up and move! (One keyboard) -

var world = [
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2,
  ],
  [
    2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 3, 0, 2,
  ],
  [
    2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2,
    2, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1,
    2, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2,
    1, 1, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 1, 1, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 2, 1, 1, 1, 1, 2,
  ],
  [
    2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 2, 2, 1, 1, 1, 2,
  ],
  [
    2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2,
    2, 2, 2, 2, 1, 1, 2,
  ],
  [
    2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 3, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2,
  ],
];

var score = 0;

var pacman = {
  x: 1,
  y: 1,
};

var ghost = {
  x: 30,
  y: 1,
};

function displayWorld() {
  var output = "";
  for (var i = 0; i < world.length; i++) {
    output += "\n<div class='row'>";
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2) {
        output += "<div class='brick'></div>";
      } else if (world[i][j] == 1) {
        output += "<div class='coin'></div>";
      } else if (world[i][j] == 0) {
        output += "<div class='empty'></div>";
      } else if (world[i][j] == 3) {
        output += "<div class='cherry'></div>";
      }
    }
    output += "\n</div>";
  }
  //   console.log(output);
  document.getElementById("world").innerHTML = output;
}

function displayPacman() {
  document.getElementById("pacman").style.top = pacman.y * 24 + "px";
  document.getElementById("pacman").style.left = pacman.x * 20 + "px";
}

function displayScore() {
  document.getElementById("score").innerText = score;
}

function displayGhost() {
  document.getElementById("ghost").style.top = ghost.y * 24 + "px";
  document.getElementById("ghost").style.left = ghost.x * 20 + "px";
}

function display() {
  displayWorld();
  displayScore();
  displayPacman();
  displayGhost();
}

document.onkeydown = function (e) {
  // Up
  if (e.keyCode == 37 && pacman.x > 0 && world[pacman.y][pacman.x - 1] != 2) {
    pacman.x--;
    document.getElementById("pacman").style.transform = "rotate(180deg)";
  }
  // Down
  else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
    pacman.x++;
    document.getElementById("pacman").style.transform = "rotate(0deg)";
  }
  // left
  else if (e.keyCode == 38 && pacman.y && world[pacman.y - 1][pacman.x] != 2) {
    pacman.y--;
    document.getElementById("pacman").style.transform = "rotate(270deg)";
  }
  // right
  else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
    pacman.y++;
    document.getElementById("pacman").style.transform = "rotate(90deg)";
  }

  // Score feature
  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    score += 10;
    display();
  } else if (world[pacman.y][pacman.x] == 3) {
    world[pacman.y][pacman.x] = 0;
    score += 50;
    display();
  }

  //   console.log(e.keyCode);
  meetGhost();
  displayPacman();
};

// ghost feature
function meetGhost() {
  if (pacman.y == ghost.y && pacman.x == ghost.x) {
    var temp = document.getElementById("container");

    temp.style.display = "flex";
    temp.style.flexDirection = "column";
    temp.innerHTML = `
    <div><p>Your score is ${score}/1900 </p></div>
    <button onclick="location.reload()">Back</button>`;
  }
  if (score == 1900) {
    var temp = document.getElementById("container");

    temp.style.display = "flex";
    temp.style.flexDirection = "column";
    temp.innerHTML = `
    <div><p>YOU WON!!!</p></div>
    <button onclick="location.reload()">Back</button>`;
  }
}

// Ghost move feature
function randomCheck() {
  let num = Math.floor(Math.random() * 4);
}

function randomMove() {
  var randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  switch (randomNum) {
    case 0: // left
      if (world[ghost.y][ghost.x - 1] == 2) {
        randomMove();
        return;
      }
      ghost.x--;
      break;
    case 3: // right
      if (world[ghost.y][ghost.x + 1] == 2) {
        randomMove();
        return;
      }
      ghost.x++;
      break;
    case 2: // up
      if (world[ghost.y - 1][ghost.x] == 2) {
        randomMove();
        return;
      }
      ghost.y--;
      break;
    case 1: // down
      if (world[ghost.y + 1][ghost.x] == 2) {
        randomMove();
        return;
      }
      ghost.y++;
      break;
  }

  meetGhost();
  displayGhost();
}

function run() {
  let temp = document.getElementById("container");
  // reset the css inside the container
  temp.style.all = "revert";
  document.getElementById("container").innerHTML = `<div id="world"></div>
    <div id="pacman"></div>
    <div id="score"></div>
    <div id="ghost"></div>`;
  display();
  setInterval(randomMove, 0.1);
}

// Another ways to set the cherry
// function displayCherry() {
//   for (let i = 0; i < cherry.x.length; i++) {
//     document.getElementById(
//       "container"
//     ).innerHTML += `<div class="cherry"></div>`;
//     document.getElementsByClassName("cherry")[i].style.top =
//       cherry.y[i] * 24 + "px";
//     document.getElementsByClassName("cherry")[i].style.left =
//       cherry.x[i] * 20 + "px";
//   }
// }
// displayCherry();
