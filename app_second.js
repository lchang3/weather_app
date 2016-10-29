var name = prompt("Please enter your name to LongIn")

var security_question = prompt("What is your Date of Birth? MMDDYY")

var final_question = prompt("What college did you attend?")

if(name == "Li Yu Chang" && security_question =="051793" && final_question == "The University of Alabama"){

  alert("Welcome back sir!")

} else{

  alert("Warning! Invalid information entered.")
  window.location= "https://www.google.com"
}
