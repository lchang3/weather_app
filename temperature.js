var first_temp = document.getElementById("first_temperature")

  var getrandom = function (){

  return Math.round((Math.random()*80) + 20)

}

first_temp.textContent = getrandom().toString()+"°"


var second_temp = document.getElementById("second_temperature")

  var getrandom = function (){

  return Math.round(Math.random()*80 + 20)

  }

second_temp.textContent = getrandom().toString()+"°"


var third_temp = document.getElementById("third_temperature")

  var getrandom = function(){

    return Math.round(Math.random()*80+20)
  }

third_temp.textContent = getrandom().toString()+"°"


var fourth_temp = document.getElementById("fourth_temperature")

  var getrandom = function(){
    return Math.round(Math.random()*80+20)
  }

fourth_temp.textContent = getrandom().toString()+"°"
