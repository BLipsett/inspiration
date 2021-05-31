import { clockService } from "../Services/ClockService.js";

function _drawClock() {
  console.log("draw clock again");
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  minutes = _checktime(minutes);
  let template = `<div>
  
  <span class="clock-time">${hours} : ${minutes}</span>
  </div>
  `;

  document.getElementById("clock").innerHTML = template;
}

function _checktime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
export default class ClockController {
  constructor() {
    _drawClock();
    let time = setInterval(_drawClock, 10000);
  }
}
