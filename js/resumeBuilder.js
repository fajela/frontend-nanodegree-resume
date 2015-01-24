
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

var work = {
	"companies" : [
		{
			"date" : "11/2013 up to this moment",
			"company" : "Profirem.com.ua",
			"position" : "Founder and co-owner. Responsible for Sales and Marketing"
		},
		{
			"date" : "11/2007 - 01/2014",
			"company" : "Ukrainian Media Holding",
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
			"date" : "01/2006 -  10/2006",
			"company" : "Freelancer",
			"position" : "Content-writer and Translator"
		},
		{
			"date" : "05/2005 -  12/2005",
			"company" : "Industrial Building Technologies",
			"position" : "Sales Manager. Pre-engineered buildings"
		},
		{
			"date" : "09/2004 -  05/2005",
			"company" : "InternetGates (Malta-USA)",
			"position" : "Sales Manager. Internet Advertising"
		},
		{
			"date" : "01/2001 -  06/2004",
			"company" : "different companies: Herz, Visual Bureau, Agroprodexport",
			"position" : "Sales Manager or Client Relations Manager"
		},
		{
			"date" : "08/1999 -  02/2001",
			"company" : "Agroprodexport",
			"position" : "Secretary-consultant"
		}
		],
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