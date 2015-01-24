
var formattedName = HTMLheaderName.replace("%data%", "Olesia Korobka");
var formattedRole = HTMLheaderRole.replace("%data%", "Project Manager");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

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
	"companies" : [
		{
			"date" : "11/2007 - 01/2014"
			"company" : "Ukrainian Media Holding"
			"subdates" : [
			{
				"subdate" : " 10/2011 - 01/2013"
				"position" : "Sales Director (Advertising), Argumenty i Fakty",
				"resposibilities" : {
					"num1" : "sales plan distribution among sales specialists, control and fulfilment;",
					"num2" : "projects development and presentation;",
					"num3" : "sales to and meetings with clients (to help sales specialists);",
					"num4" : "sales department coordination."
				}
			},
			{
				"position" : "Deputy Director (Advertising), Argumenty i Fakty."
				"subdate" : "09/2010 - 10/2011"
				"resposibilities" : {
					"num1" : "top agencies and clients account management;",
					"num2" : "searching for the new clients and those who did not advertise before;",
					"num3" : "convincing new clients, presentations and negotiations (especially to maintain pricing politics);",
					"num4" : "relationship with present clients and agencies."
				}
			},
			{
				"position" : "Key Clients Relations Manager for 7 radio stations, Key Agencies Relationship Manager,
Political Advertising Manager for 7 radio stations, (Advertising)"
				"subdate" : "11/2007 - 10/2008"
				"resposibilities" : {
					"num1" : "key clients servicing (presentations, negotiations, conclusion of contracts, legal assistance, consulting, marketing analysis, meeting organisation, planning, execution control);",
					"num2" : "sales to clients of the key agencies (including direct sales);",
					"num3" : "internal financial reporting; financial analysis and statistics;",
					"num4" : "political advertising media planning, locating, broadcast control."
				}
			},
			{
				"position" : "Deputy Director, Europa Plus, (Advertising)"
				"subdate" : "10/2006 - 10/2007"
				"resposibilities" : {
					"num1" : "sales managers work and sales plan accomplishment control and support;",
					"num2" : "internal financial reporting; financial analysis and statistics;",
					"num3" : "searching for new sales managers, testing, interviewing;",
					"num4" : "key clients servicing, political advertising media planning, locating, broadcast control."
				}
			}
		},
		{
			
		}
		],
	"currentPosition" : "self-employed",
	"employer" : "business owner",
	"yearsWorked" : "2014 up to this moment",
	"city" : "Kiev"
	}
	
};

var education = {
	"onlineCourses" = [
	{
		"name" : "Coursera",
		"specialization" : "Fundamentals of Coumputing",
		"duration" : "for 25 weeks, finished in January 2015"
	},
	{
		"name" : "Udacity",
		"specialization" : "Front-End Web Developer (Nanodegree)",
		"duration" : "2 months, finished in February 2015"
	}
	],
	"schools" = {
		"name" : "International Christian University",
		"city" : "Kiev, Ukraine",
		"degree" : "BA",
		"major" : "Administrative Managment"
	},
};

var project = {

};

$("#main").append(work["currentPosition"]);
$("#main").append(education.schoolName);