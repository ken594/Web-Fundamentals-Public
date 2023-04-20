function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

var hourDiv = document.querySelector("#hour");
var minsDiv = document.querySelector("#minutes");
var secsDiv = document.querySelector("#seconds");

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  // your code here
  var hours = (time / 3600).toPrecision(3);
  var mins = new Date().getMinutes();
  var secs = new Date().getSeconds();

  var timeDeg = (hours * 30 + 180) % 360;
  var minsDeg = (mins * 6 + 180) % 360;
  var secsDeg = (secs * 6 + 180) % 360;

  hourDiv.style.transform = "rotate(" + timeDeg + "deg)";
  minsDiv.style.transform = "rotate(" + minsDeg + "deg)";
  secsDiv.style.transform = "rotate(" + secsDeg + "deg)";
  //   console.log(time);
}, 1000);
