const convertToCelsius = function(farh) {

  let celsius = (farh-32) * ( 5/9);
  return (Math.round(celsius * 10) / 10);
};

const convertToFahrenheit = function(celsius) {
  let farh = (celsius * 9/5) + 32
  return (Math.round(farh * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
