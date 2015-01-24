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

// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(skills.length);

var bio = {
	"name" : "Olesia Korobka",
	"role" : "Project Manager",
	"age" : 32,
	"contacts" : {
		"e-mail" : "fajela@gmail.com",
		"mobile" :  "+38-096-94-11-373",
		"github" : "fajela",
		"skype": "giridja",
		"location" : "Kiev, Ukraine"
	},
	"skills" : ["awesomeness", "programming", "managing sales", "JS"],
	"welcomeMessage" : "Hi!",
	"bioPic" : "images/fry.jpg"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.skills);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.bioPic);

var work = {
	"currentPosition" : "self-employed",
	"employer" : "business owner",
	"yearsWorked" : "2014 up to this moment",
	"city" : "Kiev"
};

var education = {
	"schoolName" : "International Affairs School #51",
	"years" : "1997 - 1999",
	"schoolCity" : "Kiev"
};

$("#main").append(work["currentPosition"]);
$("#main").append(education.schoolName);