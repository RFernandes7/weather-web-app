const APIKey = "076182d4b0485e14a204915666e0afdf";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchText = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weatherimg");

// Geting date
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getUTCDay()];
const time = new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric' });


async function Get_Weather_Data(city){
    const response = await fetch(apiURL + city +`&appid=${APIKey}`);
    let data = await response.json();

    if(response.status = 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    console.log(data);
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector("#sky").innerHTML = data.weather[0].main;
    document.getElementById("curdate").innerHTML = day+",";
    document.getElementById("curtime").innerHTML = time;

    switch(data.weather[0].main){
        case 'Rain':
            weatherImg.src = "images/rain.png";
            break;
        case "Clear":
            weatherImg.src = "images/clear.png";
            break;
        case "Clouds":
            weatherImg.src = "images/clouds.png";
            break;
        case "Drizzle":
            weatherImg.src = "images/drizzle.png";
            break;
        case 'Mist':
            weatherImg.src = "images/mist.png";
            break;
        case "Clear":
            weatherImg.src = "images/clear.png";
            break;
        case "Haze":
            weatherImg.src = "images/clouds.png";
            break;
        case "Smoke":
            weatherImg.src = "images/clouds.png";
            break;
        default :
            weatherImg = "";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

searchBtn.addEventListener('click', ()=>{
    Get_Weather_Data(searchText.value);
    searchText.value = "";
})