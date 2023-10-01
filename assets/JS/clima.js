

window.addEventListener("load", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;

const api = "7e2b87b2bd9349e52e54bfafbe18d0d8"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&lang=sp`


fetch(apiUrl)
.then((response) => {
    return response.json();
})
.then((data) => {
    let icon = data.weather[0].icon;
    loc.textContent = `Localidad ${data.name}`
    descriTemp.textContent = `Clima: ${data.weather[0].description}`
    temperature.textContent = "Temperatura:" + Math.floor(data.main.temp - convertor) + "°C";   
    icono.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Icono"></img>`


}) 
 })}
})




