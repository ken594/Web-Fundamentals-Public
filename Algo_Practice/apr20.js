// 1
function isPresent2d(arr2d, value) {
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[0].length; j++) {
      if (arr2d[i][j] === value) {
        return true;
      }
    }
  }
  return false;
}

// 2
function flattenArray(arr2d) {
  //   const res = [];
  //   for (var i = 0; i < arr2d.length; i++) {
  //     for (var j = 0; j < arr2d[i].length; j++) {
  //       res.push(arr2d[i][j]);
  //     }
  //   }
  //   return res;

  return [].concat(...arr2d);
}

const arr2 = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
];

console.log(flattenArray(arr2));
// console.log(arr2.flat(arr2.length));
