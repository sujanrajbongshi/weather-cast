const API_KEY = `a1c1ceeaff6e2bdc1ae1cf25776ea4d2`;
const searchTemperature = () =>{
    const city_name = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTempereture(data))
}

const displayTempereture = temperature => {
    console.log(temperature)
}