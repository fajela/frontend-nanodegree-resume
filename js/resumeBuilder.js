
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
	"jobs" : [
		{
			"dates" : "11/2013 up to this moment",
			"employer" : "Profirem.com.ua",
			"title" : "Founder and co-owner. Responsible for Sales and Marketing",
			"description" : "Repairs and Building Company",
			"location" : "Kiev, Ukraine"
		},
		{
			"dates" : "11/2007 - 01/2014",
			"employer" : "Ukrainian Media Holding",
			"location" : "Kiev, Ukraine",
			"dates" : [
			{
				"dates" : " 10/2011 - 01/2013"
				"title" : "Sales Director (Advertising), Argumenty i Fakty",
				"description" : {
					"num1" : "sales plan distribution among sales specialists, control and fulfilment;",
					"num2" : "projects development and presentation;",
					"num3" : "sales to and meetings with clients (to help sales specialists);",
					"num4" : "sales department coordination."
				}
			},
			{
				"title" : "Deputy Director (Advertising), Argumenty i Fakty."
				"dates" : "09/2010 - 10/2011"
				"description" : {
					"num1" : "top agencies and clients account management;",
					"num2" : "searching for the new clients and those who did not advertise before;",
					"num3" : "convincing new clients, presentations and negotiations (especially to maintain pricing politics);",
					"num4" : "relationship with present clients and agencies."
				}
			},
			{
				"title" : "Key Clients Relations Manager for 7 radio stations, Key Agencies Relationship Manager,
Political Advertising Manager for 7 radio stations, (Advertising)"
				"dates" : "11/2007 - 10/2008"
				"description" : {
					"num1" : "key clients servicing (presentations, negotiations, conclusion of contracts, legal assistance, consulting, marketing analysis, meeting organisation, planning, execution control);",
					"num2" : "sales to clients of the key agencies (including direct sales);",
					"num3" : "internal financial reporting; financial analysis and statistics;",
					"num4" : "political advertising media planning, locating, broadcast control."
				}
			},
			{
				"title" : "Deputy Director, Europa Plus, (Advertising)"
				"dates" : "10/2006 - 10/2007"
				"description" : {
					"num1" : "sales managers work and sales plan accomplishment control and support;",
					"num2" : "internal financial reporting; financial analysis and statistics;",
					"num3" : "searching for new sales managers, testing, interviewing;",
					"num4" : "key clients servicing, political advertising media planning, locating, broadcast control."
				}
			}
			]
		},
		{
			"dates" : "01/2006 -  10/2006",
			"employer" : "Freelancer",
			"title" : "Content-writer and Translator"
		},
		{
			"dates" : "05/2005 -  12/2005",
			"employer" : "Industrial Building Technologies",
			"title" : "Sales Manager. Pre-engineered buildings"
		},
		{
			"dates" : "09/2004 -  05/2005",
			"employer" : "InternetGates (Malta-USA)",
			"title" : "Sales Manager. Internet Advertising"
		},
		{
			"dates" : "01/2001 -  06/2004",
			"employer" : "different companies: Herz, Visual Bureau, Agroprodexport",
			"title" : "Sales Manager or Client Relations Manager"
		},
		{
			"dates" : "08/1999 -  02/2001",
			"employer" : "Agroprodexport",
			"title" : "Secretary-consultant"
		}
		],
	}
};

var education = {
	"onlineCourses" = [
	{
		"school" : "Coursera",
		"title" : "Fundamentals of Coumputing",
		"dates" : "for 25 weeks, finished in January 2015"
		"url" : "https://www.coursera.org/specialization/fundamentalscomputing2/37"
	},
	{
		"school" : "Udacity",
		"title" : "Front-End Web Developer (Nanodegree)",
		"dates" : "in progress, started on th 11th of January, 2015",
		"url" : "https://www.udacity.com/course/nd001"
	}
	],
	"schools" = {
		"school" : "International Christian University",
		"location" : "Kiev, Ukraine",
		"degree" : "BA",
		"major" : "Administrative Managment"
		"dates" : "1999 - 2003"
	},
};

var "projects" = {
	"projects" : [
		{
			"title" : "profirem.com.ua",
			"dates" : "since 11/2013",
			"description" : "founding, development, online-marketing and technical support"
		},
		{
			"title" : "fajela.com",
			"dates" : "since 12/2014",
			"description" : "in progress of idea development"
		}
	]
};

//$("#main").append(work["currentPosition"]);
//$("#main").append(education.schoolName);