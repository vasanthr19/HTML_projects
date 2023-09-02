// document.querySelectorAll("button").addEventListener("click", handleClick);
var m = document.querySelectorAll(".drum");
var audio = new Audio("./sounds/tom-1.mp3");
for (var i = 0; i < m.length; i++) {
  m[i].addEventListener("click", handleClick);
}
function handleClick() {
  var keyword = this.innerHTML;
  playSound(keyword);
}
document.addEventListener("keydown", function (event) {
  playSound(event["key"]);
});
function playSound(keyword) {
  switch (keyword) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();

      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/kick.mp3");
      audio.play();
      break;

    default:
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
  }
}
