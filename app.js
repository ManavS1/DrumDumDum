const drum = document.querySelectorAll(".drum");
const body = document.querySelector('body');

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 87) {
    let audio = new Audio("assets/audio/tom1.ogg");
    audio.play();
  } else if (event.keyCode === 65) {
    let audio1 = new Audio("assets/audio/tom2.ogg");
    audio1.play();
  } else if (event.keyCode === 83) {
    let audio2 = new Audio("assets/audio/tom3.ogg");
    audio2.play();
  } else if (event.keyCode === 68) {
    let audio3 = new Audio("assets/audio/tom4.ogg");
    audio3.play();
  } else if (event.keyCode === 70) {
    let audio4 = new Audio("assets/audio/tom5.ogg");
    audio4.play();
  }
});

drum.forEach((item) => {
  item.addEventListener("click", () => {
    let btnClass = item.classList;
    switch (true) {
      case btnClass.contains("w"):
        let audio = new Audio("assets/audio/tom1.ogg");
        audio.play();
        break;
      case btnClass.contains("a"):
        let audio1 = new Audio("assets/audio/tom2.ogg");
        audio1.play();
        break;
      case btnClass.contains("s"):
        let audio2 = new Audio("assets/audio/tom3.ogg");
        audio2.play();
        break;
      case btnClass.contains("d"):
        let audio3 = new Audio("assets/audio/tom4.ogg");
        audio3.play();
        break;
      case btnClass.contains("f"):
        let audio4 = new Audio("assets/audio/tom5.ogg");
        audio4.play();
        break;

      default:
        let audio5 = new Audio("assets/audio/tom5.ogg");
        audio5.play();
        break;
    }
  });
});
