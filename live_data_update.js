var first_location =  {
  place : "Flushing", temperature : "" , time : "6:04"
}

var first_temp_display = document.getElementById("first_temperature")

var request_1 = new XMLHttpRequest()

request_1.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/NY/Flushing.json")

request_1.send()

request_1.addEventListener("load", function(){

   var response = JSON.parse(request_1.responseText)

   var temp_1 = response.current_observation.temp_c + "°C"




   first_temp_display.textContent= temp_1

 }
 )



var second_location = {
     place : "Miami", temperature : "", time : "6:04"
   }

var second_temp_display = document.getElementById("second_temperature")

var request_2 = new XMLHttpRequest()

request_2.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/FL/Miami.json")

request_2.send()

request_2.addEventListener("load", function(){

      var response = JSON.parse(request_2.responseText)

      var temp_2 = response.current_observation.temp_c + "°C"

      second_temp_display.textContent= temp_2
    }
    )
var third_location = {
     place : "Wausau", temperature : "°C", time : "5:04"
   }

var third_temp_display = document.getElementById("third_temperature")

var request_3 = new XMLHttpRequest()

request_3.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/WI/Wausau.json")

request_3.send()

request_3.addEventListener("load", function(){

      var response = JSON.parse(request_3.responseText)

      var temp_3 = response.current_observation.temp_c + "°C"



      third_temp_display.textContent= temp_3
    }
    )


var fourth_location = {
     place : "Tuscaloosa", temperature : "°C", time : "5:04"
   }

var fourth_temp_display = document.getElementById("fourth_temperature")

var request_4 = new XMLHttpRequest()

request_4.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/AL/Tuscaloosa.json")

request_4.send()

request_4.addEventListener("load", function(){

      var response = JSON.parse(request_4.responseText)

      var temp_4 = response.current_observation.temp_c + "°C"

      fourth_temp_display.textContent= temp_4
    }
    )


var first_loca_display = document.getElementById("first_location_name")

var second_loca_display = document.getElementById("second_location_name")

var third_loca_display = document.getElementById("third_location_name")

var fourth_loca_display = document.getElementById("fourth_location_name")

   first_loca_display.textContent= first_location.place

   second_loca_display.textContent= second_location.place

   third_loca_display.textContent= third_location.place

   fourth_loca_display.textContent= fourth_location.place

  //  var first_time_display = document.getElementById("first_time")
  //  var second_time_display = document.getElementById("second_time")
  //  var third_time_display = document.getElementById("third_time")
  //  var fourth_time_display = document.getElementById("fourth_time")
   //
  //  first_time_display.textContent = first_location.time
   //
  //  second_time_display.textContent = second_location.time
   //
  //  third_time_display.textContent = third_location.time
   //
  //  fourth_time_display.textContent = fourth_location.time

var first_icon_display = document.getElementById("first_icon")

var request_5 = new XMLHttpRequest()

request_5.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/NY/Flushing.json")

request_5.send()

request_5.addEventListener("load", function(){

         var response = JSON.parse(request_5.response)
         var icon_5 = response.current_observation.icon_url


         first_icon_display.setAttribute("src", icon_5)
       }
       )

var second_icon_display = document.getElementById("second_icon")

var request_6 = new XMLHttpRequest()

request_6.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/FL/Miami.json")

request_6.send()

request_6.addEventListener("load", function(){

       var response = JSON.parse(request_6.response)
       var icon_6 = response.current_observation.icon_url

       second_icon_display.setAttribute("src", icon_6)
}
)

var third_icon_display = document.getElementById("third_icon")

var request_7 = new XMLHttpRequest()

request_7.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/WI/Wausau.json")

request_7.send()

request_7.addEventListener("load", function(){

       var response = JSON.parse(request_7.response)
       var icon_7 = response.current_observation.icon_url

       third_icon_display.setAttribute("src", icon_7)
}
)

var fourth_icon_display = document.getElementById("fourth_icon")

var request_8 = new XMLHttpRequest()

request_8.open ("GET", "http://api.wunderground.com/api/59eb7c4d5b00ff87/conditions/q/AL/Tuscaloosa.json")

request_8.send()

request_8.addEventListener("load", function(){

       var response = JSON.parse(request_8.response)
       var icon_8 = response.current_observation.icon_url

       fourth_icon_display.setAttribute("src", icon_8)

     }
     )
