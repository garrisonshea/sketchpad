// This Sketchpad application will create a 960px grid that reacts to the user's mouse 
// hovering over the indiviual squares. 


// This function will run on load and will create the default sketchpad
function createSketchpad(width) {
	var squareWidth = Math.floor(960 / width);
	for (var j = 0; j < width; j++) {
		for (var i = 0; i < width; i++) {
			var div = document.createElement('div');
			div.setAttribute('class', 'sketch');
			document.getElementById("container").appendChild(div);
		}
	}
	console.log(squareWidth);
	$('.sketch').width(squareWidth);
	$('.sketch').height($('.sketch').width());
	// $('#container').height($('.sketch').width() * width);
}

createSketchpad(16);