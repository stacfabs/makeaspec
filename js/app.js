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

// =====
// Select delivery option
// =====


