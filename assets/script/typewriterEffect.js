var i = 0;
var txt = "Taste the best spaghetti in town";
var speed = 100;
function typewriter() {
  if (i < txt.length) {
    document.getElementById("tagline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
