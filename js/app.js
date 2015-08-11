var data = {};

// console.log("Data before function = " + data);
 
var submitClick = function() {
	data.title = (document.getElementById('title').value);
	data.emails = (document.getElementById('inputEmail').value);
	console.log(data);
};

submitButton.addEventListener('click', submitClick);