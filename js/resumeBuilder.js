var bio = {
	"name" : "Olesia KOROBKA",
	"role" : "Project Manager",
	"contacts" : {
		"e-mail" : "fajela@gmail.com",
		"mobile" :  "+38-096-94-11-373",
		"github" : "fajela",
		"skype": "giridja",
		"location" : "Kiev, Ukraine"
	},
	"skills" : ["managing sales", "SEO", "Python", "JS"],
	"welcomeMessage" : "This is my resume",
	"bioPic" : "images/olesia.jpg"
};

var work = {
	"jobs" : [
		{
			"dates" : "11/2013 up to this moment",
			"employer" : "Profirem.com.ua",
			"title" : "Co-Founder. Responsible for Sales and Marketing",
			"description" : "Repairs and Building Company",
			"location" : "Kiev, Ukraine"
		},
		{
			"dates" : "11/2007 - 01/2014",
			"employer" : "Ukrainian Media Holding",
			"title" : "Sales Department",
			"location" : "Kiev, Ukraine",
			"bigdescription" : [
			{
				"dates" : " 10/2011 - 01/2013",
				"title" : "Sales Director (Advertising), newspaper Argumenty i Fakty",
				"description" : "<br>- Fulfilled sales plans during the company restructurisation,<br>- managed to keep key sales specialists without additional expenses,<br>- comforted and supported all the changes in the company during the change of its ownership,<br>- developed new projects and presentations,<br>- sales to and meetings with clients (to help sales specialists and comfort clients during the period of restructurisation)."
			},
			{
				"title" : "Deputy Director (Advertising), newspaper Argumenty i Fakty.",
				"dates" : "09/2010 - 10/2011",
				"description" : "<br>- top agencies and clients account management,<br>- searching for the new clients and those who did not advertise before,<br>- convincing new clients, presentations and negotiations (especially to maintain pricing politics),<br>- relationship with present clients and agencies."
			},
			{
				"title" : "Key Clients Relations Manager for 7 radio stations, Key Agencies Relationship Manager, Political Advertising Manager for 7 radio stations, (Advertising)",
				"dates" : "11/2007 - 10/2008",
				"description" : "<br>- key clients servicing (presentations, negotiations, conclusion of contracts, legal assistance, consulting, marketing analysis, meeting organisation, planning, execution control),<br>- sales to clients of the key agencies (including direct sales),<br>- internal financial reporting; financial analysis and statistics,<br>- political advertising media planning, locating, broadcast control."
			},
			{
				"title" : "Deputy Director, Europa Plus, (Advertising)",
				"dates" : "10/2006 - 10/2007",
				"description" : "<br>- sales managers work and sales plan accomplishment control and support,<br>- internal financial reporting; financial analysis and statistics,<br>- searching for new sales managers, testing, interviewing,<br>- key clients servicing, political advertising media planning, locating, broadcast control."
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
		"title" : "Fundamentals of Computing",
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
		"major" : "Administrative Management",
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
		if (typeof work.jobs[job].description === "undefined") {
			var formattedDescription = HTMLworkDescription.replace("%data%", "");
			$(".work-entry:last").append(formattedDescription);
		}else
		{
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}

		if (typeof work.jobs[job].bigdescription != "undefined") {
			for (subjob in work.jobs[job].bigdescription) {
				var formattedBigTitle = HTMLworkBigTitle.replace("%data%", work.jobs[job].bigdescription[subjob].title);
		    	$(".work-entry:last").append(formattedBigTitle);
				var formattedBigDates = HTMLworkBigDates.replace("%data%", work.jobs[job].bigdescription[subjob].dates);
				$(".work-entry:last").append(formattedBigDates);
				var formattedBigDescription = HTMLworkBigDescription.replace("%data%", work.jobs[job].bigdescription[subjob].description);
				$(".work-entry:last").append(formattedBigDescription);
			}
		}
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