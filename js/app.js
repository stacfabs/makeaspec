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
// Force value type on fields
// Dropdown for sponsors
// Active search for sponsors
// Import sponsor optionsfrom "database"
// 
