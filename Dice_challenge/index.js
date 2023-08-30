var rnd1 = Math.ceil(Math.random() * 6);
console.log(rnd1);
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + rnd1 + ".png");
var rnd2 = Math.ceil(Math.random() * 6);
console.log(rnd2);
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + rnd2 + ".png");
if (rnd1 > rnd2) msg = "Player1 Wins";
else if (rnd2 > rnd1) msg = "Player2 Wins";
else msg = "Draw";
document.querySelector("h1").textContent = msg;
