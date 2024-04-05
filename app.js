const API_KEY = `3c394a2019f2a3a74df1659b82ca74cc`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");


const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City Not Found </h2>`;
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener("submit", (event) => {
    getWeather(search.value);
    event.preventDefault();
})