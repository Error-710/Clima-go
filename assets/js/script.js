const api_key = 'e2aa6db7aba777c9d28b263b755804c7'
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherBox = document.getElementById("weatherBox");

searchBtn.addEventListener('click',() => {
    const city = cityInput.value.trim();
    if(city){
        getClima(city);
    }else{
        alert("digite uma cidade!")
    }
})

const getClima = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=pt`
    const resp = await fetch(URL)
    const data = await resp.json();
    console.log(data);
    formatar_documento(data);

    async function formatar_documento (data) {
        document.getElementById('cityName').textContent = city;
        document.getElementById('temperature').textContent = `${data.main.temp.toFixed(1)}C°`;
        document.getElementById('description').textContent = data.weather[0].description;
        const clima = data.weather[0].main;
        if (clima === 'Clear'){
            document.getElementById('weatherIcon').src = 'image/clear.png';
        }
        if (clima === 'Clouds'){
            document.getElementById('weatherIcon').src = 'image/Clouds.png';
        }
        if (clima === 'Rain' || clima === 'Thunderstorm' || clima === 'Drizzle'){
            document.getElementById('weatherIcon').src = 'image/Rain.png';
        }

        weatherBox.style.display = "block"
    }


}