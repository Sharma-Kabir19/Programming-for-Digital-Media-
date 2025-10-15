const API_KEY = '398daa2575b80b8f1ba728cdeedad3d6'; 
const CITY_NAME = 'Dublin, IE';
const UNITS = 'metric';

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=${UNITS}&appid=${API_KEY}`;

const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temperature');
const descElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const errorElement = document.getElementById('error-message');

async function getWeatherData() {
    cityElement.textContent = `Loading weather for ${CITY_NAME}...`;
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        displayError(`Could not load weather data. Please check your API Key and the city name.`);
    }
}

function displayWeather(data) {
    errorElement.textContent = '';
    
    const description = data.weather[0].description
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    const unitSymbol = UNITS === 'metric' ? '°C' : '°F';
    
    cityElement.textContent = `${data.name}, ${data.sys.country}`;
    tempElement.textContent = `Temperature: ${Math.round(data.main.temp)}${unitSymbol}`;
    descElement.textContent = `Conditions: ${description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
}

function displayError(message) {
    cityElement.textContent = 'Weather Unavailable';
    tempElement.textContent = '';
    descElement.textContent = '';
    humidityElement.textContent = '';
    errorElement.textContent = message;
}

getWeatherData();