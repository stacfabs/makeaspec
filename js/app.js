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

var data = {};
var jsonData;

 
var saveClick = function() {
	data.title = (document.getElementById('title').value);
	data.emails = (document.getElementById('inputEmail').value);
	data.sponsor = (document.getElementById('sponsor').value);
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




