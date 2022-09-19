function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=19d0bcb85768ca9b32b8aa2d0604430d&units=imperial`

    document.getElementById("temp").innerText = `Your search is being processed...`;

    axios.get(url)

    .then(function (response) {
        document.getElementById("cityName").innerText = `${cityName}, ${response.data.sys.country} Temperature:`
        document.getElementById("temp").innerText = `It is now ${response.data.main.temp}°F,`
        document.getElementById("highTemp").innerText = `The high temperature is ${response.data.main.temp_max}°F,`
        document.getElementById("minTemp").innerText = `The low temperature is ${response.data.main.temp_min}°F,`
        document.getElementById("forecastTemp").innerText = `The Forecast is ${response.data.weather[0].main},`
        document.getElementById("humidityTemp").innerText = `The Humidity is ${response.data.main.humidity}%`
        
        
        console.log(response.data.main.temp);
        
    })

    .catch(function (error) {
        document.getElementById("temp").innerText = error;
        console.log(error);
    }) 
}

function getWeatherByZip(zipcode) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=19d0bcb85768ca9b32b8aa2d0604430d&units=imperial`

    document.getElementById("zipTemp").innerText = `Your search is being processed...`;

    axios.get(url)

    .then(function (response) {
        document.getElementById("zipName").innerText = `${zipcode}, ${response.data.sys.country} Temperature:`
        document.getElementById("zipTemp").innerText = `It is now ${response.data.main.temp}°F,`
        document.getElementById("highTempZip").innerText = `The high temperature is ${response.data.main.temp_max}°F,`
        document.getElementById("minTempZip").innerText = `The low temperature is ${response.data.main.temp_min}°F,`
        document.getElementById("forecastTempZip").innerText = `The Forecast is ${response.data.weather[0].main},`
        document.getElementById("humidityTempZip").innerText = `The Humidity is ${response.data.main.humidity}%`
        
        console.log(response.data.main.Temp);
        
    })

    .catch(function (error) {
        document.getElementById("zipTemp").innerText = error;
        console.log(error);
    }) 
}

window.onload = function() {
    document.getElementById("display").onclick = function() {
        const cityName = document.getElementById('cityText').value;
        
        getWeather(cityName)
    }

    document.getElementById("displayZip").onclick = function() {
        const zipCode = document.getElementById('zipText').value;
        
        getWeatherByZip(zipCode)
    }
}

