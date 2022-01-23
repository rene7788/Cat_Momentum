const API_KEY = "a7066685935c2d8930f8595118b1e25e"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    loadWeather(lat, lon)
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);
}

function loadWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${String(data.main.temp).substring(0, 2)}℃`;
    });
}

function onGeoError(){
    alert("Can't found your location.\nYou can't use weather service.");
}

const localLat = localStorage.getItem("lat");
const localLon = localStorage.getItem("lon");

if (localLat === null) {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {
    loadWeather(localLat, localLon);
}
