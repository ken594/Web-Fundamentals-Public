function goAlert() {
  alert("Loading weather report...");
}

function hide() {
  let element = document.querySelector("#cookie-bar");
  element.remove();
}

// My Old convert function
// let x = document.getElementsByClassName("temp-conversion");
// if (element.value[1] == "C") {
//   for (let i = 0; i < x.length; i++) {
//     x[i].innerText = fToC(parseFloat(x[i].innerText));
//   }
// } else if (element.value[1] == "F") {
//   for (let i = 0; i < x.length; i++) {
//     x[i].innerText = cToF(parseFloat(x[i].innerText));
//   }
// }

// function convert(element) {
//   let temp = document.getElementsByClassName("temp-conversion");
//   for (var x of temp) {
//     if (element.value[1] == "C") {
//       x.innerText = fToC(parseFloat(x.innerText));
//     } else {
//       x.innerText = cToF(parseFloat(x.innerText));
//     }
//   }
// }

// use the object to get rid of the if condition
function convert(element) {
  // get the C of F
  let celsiusOrFahrenheit = element.value[1];
  // get the element array
  let temp = document.getElementsByClassName("temp-conversion");
  // declare an object with the C / F as the key,
  // use methods to perform the task
  const conversion = {
    C: function () {
      for (var a of this) {
        a.innerText = fToC(a.innerText);
      }
    },
    F: function () {
      for (var a of this) {
        a.innerText = cToF(a.innerText);
      }
    },
  };
  // invoke the function/methods
  conversion[celsiusOrFahrenheit].call(temp);
}

function cToF(number) {
  return ((number * 9) / 5 + 32).toPrecision(2);
}

function fToC(number) {
  return (((number - 32) * 5) / 9).toPrecision(3);
}

// (((number - 32) * 5) / 9).toPrecision(2);

// for loop outside and the if statement inside of the for loop
// for of loop
// ::after
// object
