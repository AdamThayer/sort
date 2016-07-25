var names1 = ["Amy","Adam","Vivian","undefined","Remy","Mackenzie","Jack","Sea-Anna"];
var names2 = ["Alex","William","Lea Ann","Sophie","Kelli","Anisha","Charles","Justin"];

var day = 0

while (day <= 10) {
  var i = 0;
  console.log(day);
  while (i < names1.length) {
    console.log(names1[i] + " is paired with " + names2[(day + i) % names1.length]);
    i++;
  }
  day++;
}
