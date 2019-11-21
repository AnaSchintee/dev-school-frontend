let state = "start";
let counter = 0;

export function execute() {
  if (state === "start") {
    document.getElementById("execute").innerHTML = "Stop";
    state = "stop";
    document.getElementById("execute").value = "Stop";
    render();
  } else {
    document.getElementById("execute").innerHTML = "Start";
    state = "start";
    document.getElementById("execute").value = "Start";
    render();
  }
}

export function reset() {
  state = "start";
  counter = 0;
  document.getElementById("counter").innerHTML = "00:00:00";
}

function render() {
  if (state === "stop") {
    setTimeout(function() {
      counter++;
      let mseconds = counter % 100;
      let seconds = Math.floor(counter / 100);
      let minutes = Math.floor(counter / 100 / 60);

      if (minutes < 10) {
        min = "0" + minutes;
      } else if (seconds >= 60) {
        seconds = seconds % 60;
      } else if (seconds < 10) {
        seconds = "0" + seconds;
      }
      document.getElementById("counter").innerHTML =
        minutes + ":" + seconds + ":" + mseconds;
      render();
    }, 10);
  }
}
