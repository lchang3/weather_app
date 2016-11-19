Sugar.extend()

var weather = [
  {

    time: Date.create("01/01/2016 7:00 AM"),
    temp: 54,
    icon: "sunny",
    place: "New York, NY"

  },
  {
    time: Date.create("01/01/2016 7:00 AM"),
    temp: 30,
    icon: "cloudy",
    place: "Miami, FL"
  },
  {
    time: Date.create("01/01/2016 7:00 AM"),
    temp: 70,
    icon: "sunny",
    place: "Tuscaloosa, AL"
  },
  {

    time: Date.create("01/01/2016 7:00 AM"),
    temp: 54,
    icon: "sunny",
    place: "Wausau, WI"

  }

]

weather[0].temp



var now = new Date

var date_display = document.getElementById("now")

  date_display.textContent = now.format('{MM}/{dd}/{year} {Weekday}')
