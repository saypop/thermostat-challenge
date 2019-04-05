$(document).ready(function(){
  var thermostat = new Thermostat();
  update();
  displayWeather('London');
});

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var token = '&appid=c419d9b620064a51ad83b2888315081f';
  var units = '&units=metric';
  $.get(url + city + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
};

function update() {
  $('#psm_status').text('Power Saving is ' + thermostat.psm)
  $('#temperature').text(thermostat.temperature);
  $('#usage').text(thermostat.usage);
  $('#usage').attr('class', thermostat.usage());
};

$('#up').click(function () {
  thermostat.up();
  update();
});

$('#down').click(function () {
  thermostat.down();
  update();
});

$('#psm_toggle').click(function () {
  thermostat.psmSwitch();
  update();
});

$('#reset').click(function () {
  thermostat.reset();
  update();
});

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})
