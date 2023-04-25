const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");
//update ui
const updateUI = async (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;
  details.innerHTML = `
  
        <h5 class="my-3">${cityDets.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
  
  `;
  // weather icon
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  //update time icon
  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }
  time.setAttribute("src", timeSrc);
  // remove class display if it's existing
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
const updateCity = async (city) => {
  // console.log(city);
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
  return { cityDets, weather };
};
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get city value
  const city = cityForm.city.value.trim();
  // reset cit form
  cityForm.reset();
  // update new city ui
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err.message));
});
