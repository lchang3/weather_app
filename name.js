var list = [{
  name: "Mike",
  dob: "07/07/79"
},
  {name: "Tina",
  dob: "12/01/97"
},
  {name: "Phoebe",
  dob: "08/05/90"
},
  {name: "Victor",
  dob: "10/18/92"
},
  {name: "Eric",
  dob: "05/12/88"
}]

list.forEach(function(x){
  alert(x.name + x.dob)
})
