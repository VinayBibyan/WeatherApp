const apiKey = "c328e3a6ff81e00dbeaef6ddee01d1c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        

        let weatherCondition = data.weather[0].main.toLowerCase();
        weatherIcon.src = `images/${weatherCondition}.png`;

        document.querySelector(".weather").style.display = "block";
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

