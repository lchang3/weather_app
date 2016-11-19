var first_location =  {
  place : "New York", temperature : "15°", time : "6:04"
}

var second_location = {
  place : "Miami", temperature : "20°", time : "6:04"
}

var third_location = {
  place : "Wausau", temperature : "25°", time : "5:04"
}

var fourth_location = {
  place : "Tuscaloosa", temperature : "50°", time : "5:04"
}

var first_temp_display = document.getElementById("first_temperature")
var second_temp_display = document.getElementById("second_temperature")
var third_temp_display = document.getElementById("third_temperature")
var fourth_temp_display = document.getElementById("fourth_temperature")


first_temp_display.textContent= first_location.temperature

second_temp_display.textContent= second_location.temperature

third_temp_display.textContent= third_location.temperature

fourth_temp_display.textContent= fourth_location.temperature

var first_loca_display = document.getElementById("first_location_name")
var second_loca_display = document.getElementById("second_location_name")
var third_loca_display = document.getElementById("third_location_name")
var fourth_loca_display = document.getElementById("fourth_location_name")

first_loca_display.textContent= first_location.place

second_loca_display.textContent= second_location.place

third_loca_display.textContent= third_location.place

fourth_loca_display.textContent= fourth_location.place

var first_time_display = document.getElementById("first_time")
var second_time_display = document.getElementById("second_time")
var third_time_display = document.getElementById("third_time")
var fourth_time_display = document.getElementById("fourth_time")

first_time_display.textContent = first_location.time

second_time_display.textContent = second_location.time

third_time_display.textContent = third_location.time

fourth_time_display.textContent = fourth_location.time
