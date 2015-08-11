var data = [];

// console.log("Data before function = " + data);

var submitClick = function() {
	console.log("Data on first line of function = " + data);
	data.push(document.getElementById('title'));
	console.log("Data after function = " + data);
};

submitButton.addEventListener('click', submitClick);