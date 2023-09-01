// script.js
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const resultDisplay = document.getElementById("result");

celsiusInput.addEventListener("input", convertCelsiusToFahrenheit);
fahrenheitInput.addEventListener("input", convertFahrenheitToCelsius);

function convertCelsiusToFahrenheit() {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultDisplay.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  } else {
    fahrenheitInput.value = "";
    resultDisplay.textContent = "Enter a valid Celsius value";
  }
}

function convertFahrenheitToCelsius() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = celsius.toFixed(2);
    resultDisplay.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
  } else {
    celsiusInput.value = "";
    resultDisplay.textContent = "Enter a valid Fahrenheit value";
  }
}
