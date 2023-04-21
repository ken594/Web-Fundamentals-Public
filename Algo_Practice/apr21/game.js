var theDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0],
];
var dojoDiv = document.querySelector("#the-dojo");

function setTenRandomNinjas(theDojo) {
  var coordinate = [];
  while (coordinate.length < 10) {
    let temp = Math.floor(Math.random() * 100);
    if (!coordinate.includes(temp)) {
      coordinate.push(temp);
    }
  }
  console.log(coordinate);

  for (let row = 0; row < theDojo.length; row++) {
    for (let col = 0; col < theDojo[row].length; col++) {
      theDojo[row][col] = 0;
    }
  }

  for (let i of coordinate) {
    theDojo[Math.floor(i / 10)][i % 10] = 1;
  }
}

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  console.log({ i, j });
  //   alert("TODO - determine how many ninjas are hiding in adjacent squares");
  if (theDojo[i][j] == 1) {
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
  }
  var sum = 0;

  var rowBound = [-1, 1];
  var colBound = [-1, 1];

  if (!isTop(i)) {
    rowBound[0]++;
  }

  if (!isBottom(i, theDojo)) {
    rowBound[1]--;
  }

  if (!isLeft(j)) {
    colBound[0]++;
  }

  if (!isRight(i, j, theDojo)) {
    colBound[1]--;
  }

  for (let x = rowBound[0]; x <= rowBound[1]; x++) {
    for (let y = colBound[0]; y <= colBound[1]; y++) {
      if (x == 0 && y == 0) continue;
      sum += theDojo[i + x][j + y];
    }
  }

  element.innerText = sum;

  // JS way to check
  // for (let x = -1; x <= 1; x++) {
  //   for (let y = -1; y <= 1; y++) {
  //     if (theDojo[i + x][j + y]) {
  //       sum += theDojo[i + x][j + y];
  //     }
  //   }
  // }
}

function isTop(i) {
  if (i > 0) return true;
  return false;
}

function isBottom(i, element) {
  if (i < element.length - 1) return true;
  return false;
}

function isLeft(j) {
  if (j > 0) return true;
  return false;
}

function isRight(i, j, element) {
  if (j < element[i].length - 1) return true;
  return false;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
setTenRandomNinjas(theDojo);
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theDojo);
