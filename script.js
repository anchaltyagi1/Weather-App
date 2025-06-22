async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
  
    if (!city) {
      document.getElementById("weatherResult").innerText = "Please enter a city name.";
      return;
    }
  
    const apiKey = "b171dd22733140e39f094046252206"; // WeatherAPI key
    const url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
  
      if (data.location) {
        document.getElementById("weatherResult").innerHTML = `
          <p><strong>${data.location.name}, ${data.location.country}</strong></p>
          <p>🌡️ Temp: ${data.current.temp_c}°C</p>
          <p>💧 Humidity: ${data.current.humidity}%</p>
          <p>🌬️ Wind: ${data.current.wind_kph} kph</p>
          <p>☁️ Condition: ${data.current.condition.text}</p>
          <img src="https:${data.current.condition.icon}" alt="icon">
        `;
      } else {
        document.getElementById("weatherResult").innerText = "City not found!";
      }
    } catch (error) {
      document.getElementById("weatherResult").innerText = "Error fetching data.";
      console.error(error);
    }
  }
  