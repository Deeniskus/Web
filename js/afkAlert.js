let seconds = 0;
function afkAlert() {
    seconds++
    if (seconds == 10){
        alert('Тук-Тук, вы ещё тут?')
    }
    setTimeout(afkAlert, 1000);
  }
afkAlert()

addEventListener("mousemove", (event) => {
    seconds = 0
});

addEventListener("touchmove", (event) => {
    seconds = 0
});