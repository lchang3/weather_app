var Person = class {
  full_name (){
    return this.first_name + " " + this.last_name
  }
   nameplate(){
    return this.full_name() + "(" + this.job_title + ")"
  }

  years_to_retirement(){
    return 65-this.age + "years to retirement"
 }
  years_to_drink(){
    return 21-this.age + "years to drink"
  }

  status(){
if(this.age >="21"){
  return this.nameplate() + "-" + this.years_to_retirement()
}else{
  return this.nameplate() + "-" + this.years_to_drink()
}
}
}

var bob= new Person()

 bob.first_name= "Bob"

 bob.last_name= "Jenkins"

 bob.job_title= "Vice President"

 bob.age="50"



var mike = new Person()

 mike.first_name= "Mike"

 mike.last_name= "Lam"

 mike.job_title= "Student"

 mike.age= "16"



var hao_ming = new Person()

 hao_ming.first_name= "Hao Ming"

 hao_ming.last_name= "Yan"

 hao_ming.job_title= "Chemical Engineer"

 hao_ming.age= "21"

 alert(bob.status() + mike.status() + hao_ming.status())
