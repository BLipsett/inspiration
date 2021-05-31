export default class Weather {
  constructor(data) {
    this.temp = data.main.temp;
    this.name = data.name;
    this.description = data.weather[0].description;
    this.icon = data.weather[0].icon;
  }

  get weatherTemplate() {
    let farTemp = Math.floor((this.temp - 273.15) * 9) / 5 + 32;
    let celciusTemp = Math.floor(this.temp - 273.15);

    console.log(this.temp);

    return /*html*/ `
      <div>
      <p>Todays weather in ${this.name}</p>
        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" />
            <p>${this.description}</p>
            <span id="temp-change" class="temp-display" >
                <p onclick="app.weatherController.changeToCelc()"id="far">${farTemp.toFixed(
                  0
                )}f</p>
                <p onclick="app.weatherController.changeToFar()" id="celcius" class="d-none">${celciusTemp}c</p>
            </span>
      </div>
      `;
  }
}
