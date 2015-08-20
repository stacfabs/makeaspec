// decoupling our proof of concept to prove maximum ROI for scalability potential

// =====
// Assign event listeners to FTP Delivery Option Buttons
// =====

$(document).ready(function(){

	document.getElementById("deliverSiteManagerButton").addEventListener('click',siteManagerDelivery);

	document.getElementById("sftpPullDeliverButton").addEventListener('click', SFTPPullDelivery);

	document.getElementById("sftpPushDeliverButton").addEventListener('click', SFTPPushDelivery);

});

// =====
// Apply or Toggle "Hidden" class to toggle FTP Delivery Sections
// =====

var siteManagerDelivery = function(){
		$(".siteManagerDeliveryConfig").toggleClass('hidden');
		$(".sftpPullDeliveryConfig").addClass('hidden');
		$(".sftpPushDeliveryConfig").addClass('hidden');
	};

var SFTPPullDelivery = 	function(){
		$(".sftpPullDeliveryConfig").toggleClass('hidden');
		$(".siteManagerDeliveryConfig").addClass('hidden');
		$(".sftpPushDeliveryConfig").addClass('hidden');
	};

var SFTPPushDelivery = function(){
		$(".sftpPushDeliveryConfig").toggleClass('hidden');
		$(".siteManagerDeliveryConfig").addClass('hidden');
		$(".sftpPullDeliveryConfig").addClass('hidden');
	};


// NEXT STEPS:
// 1. Get elements to apply and remove css class for visibility after button click


// =====
// Save General BDE Data into object and convert to JSON
// Just recreate in different sections.
//		1. Collect FTP as own object data set
//		Or
// 		2. Only add fields with values into single BDE Config Object with delivery
//		   info key:value pairs
// =====

var data = {};
var jsonData;

 
var saveClick = function() {
	data.title = (document.getElementById('title').value);
	data.emails = (document.getElementById('inputEmail').value);
	data.sponsor = (document.getElementById('sponsorName').value);
	console.log(data);
	jsonData = JSON.stringify(data);
	console.log(jsonData);
};

saveButton.addEventListener('click', saveClick);


// Next Steps:

// Send array values to JSON - CHECK
// Dropdown for sponsors


// NICE TO HAVE:

// Import sponsor options from "database"
// Active search for sponsors
// Force value type on fields (email)

