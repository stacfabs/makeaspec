<<<<<<< HEAD
// decoupling our proof of concept to prove maximum ROI for scalability potential

var data = {};
=======
// =====
// Assign classes to FTP Sections for use
// =====

$(document).ready(function(){

	deliverSiteManager.addEventListener('click', function(){
		$("siteManagerDeliveryConfig").removeClass('hidden');
		$(h4).removeClass('hidden');
		$("siteManagerDeliveryConfig").addClass('selected');
		console.log("selected applied to siteManagerDeliveryConfig")
		//alert("The looping function should go here.");
	});

});

// NEXT STEPS:
// 1. Get elements to apply and remove css class for visibility after button click


// =====
// Save General BDE Data into object and convert to JSON
// =====
>>>>>>> a9f7b24969e1f56e24671a5f952ce03986415b37

var data = {};
var jsonData;

 
var saveClick = function() {
	data.title = (document.getElementById('title').value);
	data.emails = (document.getElementById('inputEmail').value);
<<<<<<< HEAD
	data.sponsor = (document.getElementById('sponsorName').value);
=======
	data.sponsor = (document.getElementById('sponsor').value);
>>>>>>> a9f7b24969e1f56e24671a5f952ce03986415b37
	console.log(data);
	jsonData = JSON.stringify(data);
	console.log(jsonData);
};

saveButton.addEventListener('click', saveClick);


// Next Steps:

// Send array values to JSON - CHECK
// Dropdown for sponsors
// Import sponsor options from "database"
// Active search for sponsors
// Force value type on fields (email)




