$(document).ready(function() {
	createGrid(16);
});

function createGrid(squares) {
	var squareSize = (960 / squares); 

	if($(".square")[0]) {
		$(".square").remove(); //remove grid if it exists already
	}

	for (var i = 0; i < (squares * squares); i++) {
		$(".container").append("<div class='square'></div>");
	}
	$(".square").width(squareSize);
	$(".square").height(squareSize);

	sketch();
}

//Sets the drawing mode to default - mouse over for orange
function sketch() {
	$(".square").mouseenter(function() {
		$(this).css("background", "#EB7F00");
	});
}

function getGridSize() {
	do {
		var size = prompt("Please enter a number between 1-128: ");
	} while (size < 1 || size > 128);
	return size;
}

//defines function to reset the board back to default color
function clear() {
	$(".square").css("background", "#225378");
}

$("#new-grid").click(function() {
	createGrid(getGridSize());
});

//calls the clear function when button is clicked
$("#clear").click(function() {
	clear();
});