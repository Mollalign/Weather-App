const apiKey = "173b4f2088c0a58a2cab240ef13ac218";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.input-search-bar input');
const searchBtn = document.querySelector('.input-search-bar button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather-container').style.display = "none";
  } else {
    let data = await response.json();

    console.log(data);
  
    document.querySelector('.js-city').innerHTML = data.name;
    document.querySelector('.js-temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity-value').innerHTML = data.main.humidity;
    document.querySelector('.js-wind-speed').innerHTML = data.wind.speed;
    
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png"
    }
  
    document.querySelector('.weather-container').style.display = "block";
    document.querySelector('.error').style.display = "none";
  }

}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value); 
});

