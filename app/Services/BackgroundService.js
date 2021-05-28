import { ProxyState } from "../AppState.js";
import Background from "../Models/Background.js";
import { sandboxApi } from "./AxiosService.js";

class BackgroundService {
  constructor() {}
  async getBackground() {
    let res = await sandboxApi.get("/images");
    console.log(res.data);
    ProxyState.background = new Background(res.data);
    console.log("background image is", ProxyState.background);
  }
}

export const backgroundService = new BackgroundService();
