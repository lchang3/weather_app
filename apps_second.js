var person = {
  first_name: " Bob",

  last_name: "Jackson",

Full_Name: function(middle_name){
  return this.first_name+ middle_name + this.last_name
},

Is_teenager: function(){
  if( this.age > 20){
  alert("ahh you're old," + this.Full_Name("Terry "))
}else{
  alert("hey you're young!!" + this.Full_Name("Terry"))
}
},


  age: 20,


  favorite_food : "Jerky"


}

person.Is_teenager()
