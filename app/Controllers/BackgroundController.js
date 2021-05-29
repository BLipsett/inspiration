import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

function _drawBackground() {
  let background = ProxyState.background;
  console.log(background.img);
  let template = "";
  let backgroundElem = document.getElementById("backgroundImage");
  template += `
        <div class="container-fluid" style="background-image: url('${background.img}'); height: 100vh; background-size: cover;">

        </div>
    `;

  backgroundElem.innerHTML = template;
}

export default class BackgroundController {
  constructor() {
    console.log("bg controller");
    this.getBackground();
    ProxyState.on("background", _drawBackground);
    //_drawBackground();
  }

  getBackground() {
    backgroundService.getBackground();
  }
}
