// decoupling our proof of concept to prove maximum ROI for scalability potential

var data = {};

// console.log("Data before function = " + data);
 
var submitClick = function() {
	data.title = (document.getElementById('title').value);
	data.emails = (document.getElementById('inputEmail').value);
	data.sponsor = (document.getElementById('sponsorName').value);
	console.log(data);
};

submitButton.addEventListener('click', submitClick);

// Next Steps:

// Send array values to JSON
// For value type on fields
// Dropdown for sponsors
// Active search for sponsors
// Import sponsor optionsfrom "database"
// 
