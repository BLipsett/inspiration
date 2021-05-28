import { clockService } from "../Services/ClockService.js";

function _drawClock() {
  console.log("draw clock again");
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let template = `<div>
  
  <span class="clock-time">${hours} : ${minutes}</span>
  </div>
  `;

  document.getElementById("clock").innerHTML = template;
}
export default class ClockController {
  constructor() {
    _drawClock();
    let time = setInterval(_drawClock, 10000);
  }
}
