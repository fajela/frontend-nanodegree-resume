var bio = {
	"name" : "Olesia Korobka",
	"role" : "Project Manager",
	"contacts" : {
		"e-mail" : "fajela@gmail.com",
		"mobile" :  "+38-096-94-11-373",
		"github" : "fajela",
		"skype": "giridja",
		"location" : "Kiev, Ukraine"
	},
	"skills" : ["managing sales", "SEO", "Python", "JS"],
	"welcomeMessage" : "Hi!",
	"bioPic" : "images/olesia.jpg"
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
			"subdates" : [
			{
				"dates" : " 10/2011 - 01/2013",
				"title" : "Sales Director (Advertising), Argumenty i Fakty",
				"description" : {
					"num1" : "sales plan distribution among sales specialists, control and fulfilment;",
					"num2" : "projects development and presentation;",
					"num3" : "sales to and meetings with clients (to help sales specialists);",
					"num4" : "sales department coordination."
				}
			},
			{
				"title" : "Deputy Director (Advertising), Argumenty i Fakty.",
				"dates" : "09/2010 - 10/2011",
				"description" : {
					"num1" : "top agencies and clients account management;",
					"num2" : "searching for the new clients and those who did not advertise before;",
					"num3" : "convincing new clients, presentations and negotiations (especially to maintain pricing politics);",
					"num4" : "relationship with present clients and agencies."
				}
			},
			{
				"title" : "Key Clients Relations Manager for 7 radio stations, Key Agencies Relationship Manager, Political Advertising Manager for 7 radio stations, (Advertising)",
				"dates" : "11/2007 - 10/2008",
				"description" : {
					"num1" : "key clients servicing (presentations, negotiations, conclusion of contracts, legal assistance, consulting, marketing analysis, meeting organisation, planning, execution control);",
					"num2" : "sales to clients of the key agencies (including direct sales);",
					"num3" : "internal financial reporting; financial analysis and statistics;",
					"num4" : "political advertising media planning, locating, broadcast control."
				}
			},
			{
				"title" : "Deputy Director, Europa Plus, (Advertising)",
				"dates" : "10/2006 - 10/2007",
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
			"title" : "Content-writer and Translator",
			"location" : "Kiev, Ukraine"
		},
		{
			"dates" : "05/2005 -  12/2005",
			"employer" : "Industrial Building Technologies",
			"title" : "Sales Manager. Pre-engineered buildings",
			"location" : "Kiev, Ukraine"
		},
		{
			"dates" : "09/2004 -  05/2005",
			"employer" : "InternetGates (Malta-USA)",
			"title" : "Sales Manager. Internet Advertising",
			"location" : "Kiev, Ukraine"
		},
		{
			"dates" : "01/2001 -  06/2004",
			"employer" : "different companies: Herz, Visual Bureau, Agroprodexport",
			"title" : "Sales Manager or Client Relations Manager",
			"location" : "Ukraine"
		},
		{
			"dates" : "08/1999 -  02/2001",
			"employer" : "Agroprodexport",
			"title" : "Secretary-consultant",
			"location" : "Kiev, Ukraine"
		}
	],
};

var education = {
	"onlineCourses" : [
	{
		"school" : "Coursera",
		"title" : "Fundamentals of Coumputing",
		"dates" : "for 25 weeks, finished in January 2015",
		"url" : "https://www.coursera.org/specialization/fundamentalscomputing2/37"
	},
	{
		"school" : "Udacity",
		"title" : "Front-End Web Developer (Nanodegree)",
		"dates" : "in progress, started on th 11th of January, 2015",
		"url" : "https://www.udacity.com/course/nd001"
	}
	],
	"schools" : {
		"school" : "International Christian University",
		"location" : "Kiev, Ukraine",
		"degree" : "BA",
		"major" : "Administrative Managment",
		"dates" : "1999 - 2003"
	},
};

var projects = {
	"projects" : [
		{
			"title" : "profirem.com.ua",
			"dates" : "since 11/2013",
			"description" : "founding, development, online-marketing and technical support",
			"images" : [
				"images/profirem_nadpis.png",
				"images/23962028_ml.jpg"
			]
		},
		{
			"title" : "fajela.com",
			"dates" : "since 12/2014",
			"description" : "in progress of idea development",
			"images" : [
				"images/processing_sketch.png",
				"images/processing_sketch3_smile.png"
			]
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	for (contact in bio.contacts) {
		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
		formattedContact = formattedContact.replace("%contact%", contact);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
	}

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	}

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

function displayWork() {
	for (job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

education.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.school);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
	var formattedSchoolDegree = formattedSchoolName + formattedDegree;
	$(".education-entry:last").append(formattedSchoolName);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools.dates);
	$(".education-entry:last").append(formattedDates);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
	$(".education-entry:last").append(formattedLocation);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
	$(".education-entry:last").append(formattedMajor);

	$("#education").append(HTMLonlineClasses);
	
	for (course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineSchool = formattedOnlineTitle + formattedSchool;
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
	
}

education.display();

$("#mapDiv").append(googleMap);
/*
This function doesn't work.
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase();
  name[0].slice(1).toLowerCase();
  
  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
*/

