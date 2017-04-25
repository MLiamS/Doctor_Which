var Doctor = require('../js/doctor.js').doctorModule;

function showDoctors()

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
    console.log("trying to display humidity front-end");
    console.log(currentWeatherObject);
  });
});
