export default class Weather {
  constructor(data) {
    this.temp = data.main.temp;
    this.name = data.name;
    this.description = data.weather[0].description;
    this.icon = data.weather[0].icon;
  }

  get weatherTemplate() {
    let farTemp = Math.floor((this.temp - 273.15) * 9) / 5 + 32;
    console.log(this.temp);

    return `
      <div>
        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" />
            <p>${this.description}</p>
            <p>${farTemp.toFixed(0)}<p>
            <p>${this.name}</p>
      </div>
      `;
  }
}
