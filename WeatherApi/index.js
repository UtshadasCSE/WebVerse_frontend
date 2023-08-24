let cityName = document.getElementById("cityName");
let btn = document.getElementById("btn");

const getWeather = () => {
  let nameValue = cityName.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameValue}&appid=3bf26830a2e528facff18f79099ac044`;
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showDisplay(data);
      });
  } catch (nameValue) {
    nameValue = null;
    let desc = document.getElementById("desc");
    desc.innerHTML = "Not Found";
  }
};
const showDisplay = (data) => {
  let weather_img = document.getElementById("weatherImage");
  let celId = document.getElementById("celId");
  let desc = document.getElementById("desc");
  let humPer = document.getElementById("humPer");
  let winPer = document.getElementById("winPer");
  celId.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
  desc.innerHTML = `${data.weather[0].description}`;
  humPer.innerHTML = `${data.main.humidity}%`;
  winPer.innerHTML = `${data.wind.speed}Km/H`;

  switch (data.weather[0].main) {
    case "Clouds":
      weather_img.src = "assets/cloud.png";
      break;
    case "Clear":
      weather_img.src = "assets/clear.png";
      break;
    case "Rain":
      weather_img.src = "assets/rain.png";
      break;
    case "Mist":
      weather_img.src = "assets/mist.png";
      break;
    case "Snow":
      weather_img.src = "assets/snow.png";
      break;
  }
};
btn.onclick = () => {
  let resultShow = document.getElementById("resultShow");
  resultShow.style.display = "flex";
  getWeather();
};
