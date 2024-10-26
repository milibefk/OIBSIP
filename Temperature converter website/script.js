// script.js
document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    let convertedValue, convertedUnit;

    // Perform conversion based on selected unit
    if (unit === 'celsius') {
        // Celsius to Fahrenheit and Kelvin
        convertedValue = `${(temperature * 9/5 + 32).toFixed(2)} °F or ${(temperature + 273.15).toFixed(2)} K`;
        convertedUnit = 'Celsius';
    } else if (unit === 'fahrenheit') {
        // Fahrenheit to Celsius and Kelvin
        convertedValue = `${((temperature - 32) * 5/9).toFixed(2)} °C or ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'kelvin') {
        // Kelvin to Celsius and Fahrenheit
        convertedValue = `${(temperature - 273.15).toFixed(2)} °C or ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
        convertedUnit = 'Kelvin';
    }

    // Display result
    resultDiv.textContent = `${temperature} ${convertedUnit} is equal to: ${convertedValue}`;
});

// Example function to display weather information
function displayWeather() {
    const weatherInfo = document.getElementById('weather-info');
    // Mock weather data (Replace with actual API calls for real weather info)
    weatherInfo.textContent = "Current Weather: 25°C, Clear Sky";
}

window.onload = displayWeather; // Load weather information on page load
function displayWeather() {
    const weatherInfo = document.getElementById('weather-info');
    const apiKey = '7236a979092c53c0b15a4c1a13583c30';
    const city = 'Ethiopia'; // Replace with a dynamic city if needed
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            weatherInfo.textContent = `Current Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        })
        .catch(error => {
            weatherInfo.textContent = "Weather information not available.";
            console.error('Error fetching weather data:', error);
        });
}
