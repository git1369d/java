const geoElement = document.querySelector("#geo");
const weatherElement = document.querySelector("#weather");
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; 


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng=position.coords.longitude;
    geoElement.innerText=`You live in ${lat} ${lng}`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            weatherElement.innerText = `Weather: ${weather}, Temperature: ${temperature}°C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherElement.innerText = "Failed to fetch weather data";
        });
}
function onGeoError(){
    alert("Can`t find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
