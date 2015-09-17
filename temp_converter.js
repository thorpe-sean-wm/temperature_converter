
var fahrenheit = 32;


var fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67)/1.8;

console.log("Starting with Fahrenheit");
console.log("Fahrenheit: " + fahrenheit);
console.log("Celsius: " + fahrenheitToCelsius);
console.log("Kelvin: " + fahrenheitToKelvin);


var celsius = 0;


var celsiusToFahrenheit = (celsius * 1.8 + 32);
var celsiusToKelvin = (celsius + 273.15);

console.log("Starting with Celcius");
console.log("Celsius: " + celsius);
console.log("Fahrenheit: " + celsiusToFahrenheit);
console.log("Kelvin: " + celsiusToKelvin);

var kelvin = 273.15;


var kelvinToFahrenheit = (kelvin - 273.15) * 1.8 + 32;
var kelvinToCelsius = (kelvin - 273.15);

console.log("Starting with Kelvin");
console.log("Kelvin: " + kelvin);
console.log("Fahrenheit: " + kelvinToFahrenheit);
console.log("Celcius: " + kelvinToCelsius);