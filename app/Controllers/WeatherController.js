import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {
  document.getElementById("weather").innerHTML =
    ProxyState.weather.weatherTemplate;
}

export default class WeatherController {
  constructor() {
    console.log("weather controller ");
    ProxyState.on("weather", _drawWeather);
    this.getWeather();
  }

  getWeather() {
    weatherService.getWeather();
  }
}
