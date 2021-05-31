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

  changeToCelc() {
    document.getElementById("far").classList.add("d-none");
    document.getElementById("celcius").classList.remove("d-none");

    console.log("temp to celc");
  }

  changeToFar() {
    document.getElementById("far").classList.remove("d-none");
    document.getElementById("celcius").classList.add("d-none");

    console.log("temp to celc");
  }
}
