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

function randomColor() {
	$(".square").mouseenter(function() {
		var randomColor = "rgb(" + Math.floor(Math.random() * 256) +
		", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256)
		+ ")";
		$(this).css("background", randomColor);
	});
}

function opacity() {
	$(".square").mouseenter(function() {
		var currentOpacity = $(this).css("opacity");
		if(currentOpacity !== 0) {
			$(this).css("opacity", currentOpacity - 0.1);
		}
	});
}


//defines function to reset the board back to default color
function clear() {
	$(".square").css("background", "#225378");
}


//Binding function to event handlers

$("#new-grid").click(function() {
	createGrid(getGridSize());
});

$("#default").click(function() {
	sketch();
})

$("#random").click(function() {
	randomColor();
});

$("#opacity").click(function() {
	opacity();
});


//calls the clear function when button is clicked
$("#clear").click(function() {
	clear();
});