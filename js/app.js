var data = {};
var jsonData;
 
var submitClick = function() {
	data.title = (document.getElementById('title').value);
	data.emails = (document.getElementById('inputEmail').value);
	data.sponsor = (document.getElementById('sponsor').value);
	console.log(data);
	jsonData = JSON.stringify(data);
	console.log(jsonData);
};

submitButton.addEventListener('click', submitClick);



// Next Steps:

// Send array values to JSON - CHECK
// Different FTP config sections
// Dropdown for sponsors
// Import sponsor options from "database"
// Active search for sponsors
// Force value type on fields
// 
