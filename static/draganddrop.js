dragula([document.getElementById('left'), document.getElementById('midle'), document.getElementById('right')]);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    var element = document.getElementById("left");
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("left").onmouseover = r + " " + g + " " + b;
}, 1500);