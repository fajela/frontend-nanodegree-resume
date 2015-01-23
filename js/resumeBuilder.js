// $("#main").append("Olesia Korobka");
// var firstName = "Olesia";
// var age = 32;
// var awesomeThoughts = "I am Olesia and I am awesome."
// console.log(awesomeThoughts);
// var email = "fajela@profirem.com.ua";
// var newEmail = email.replace("profirem.com.ua", "gmail.com");
// console.log(email);
// console.log(newEmail);
// var funThoughts = awesomeThoughts.replace("awesome", "FUN");
// $("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", "Olesia Korobka");
var formattedRole = HTMLheaderRole.replace("%data%", "Project Manager");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);