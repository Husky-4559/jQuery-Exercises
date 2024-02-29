function clearError() {
	$("#msg").text("");

	$("#movie-title").prev().removeClass("error");
	$("#movie-rating").prev().removeClass("error");
	$("#msg").removeClass("error");
}

function formInputs() {
	let trueValues = false;
	let movieTitle = $("#movie-title").val();

	if (movieTitle) {
		if (movieTitle.length > 1) {
			trueValues = true;
		} else {
			$("#msg").text("Titles must be at least 2 characters.");
			$("#movie-title").prev().addClass("error");
		}
	}

	if (trueValues) {
		trueValues = false;
		let movieRating = 0 + $("#movie-rating").val();

		if (movieRating >= 0 && movieRating <= 10) {
			trueValues = true;
		} else {
			$("#msg").text("Movie rating must be between 0 and 10.");
			$("#movie-rating").prev().addClass("error");
		}
	}
	return trueValues;
}

function buildStarString(inRating) {
	let outRating = "&#x2B50;".repeat(Math.round(inRating));

	return outRating;
}

$("#btn1").on("click", function (event) {
	event.preventDefault();

	clearError();

	if (formInputs()) {
		let movieDetails = `"${$("#movie-title").val()}"&nbsp;&nbsp;`;
		movieDetails =
			movieDetails + `${buildStarString($("#movie-rating").val())}`;

		let $movieDiv = $("<div>").html(movieDetails).addClass("movie-details");
		$("<button>").text("Delete").addClass("rmbutton").appendTo($movieDiv);
		$(".movies").append($movieDiv);

		$("input").val("");
	}
});

$(".movies").on("click", ".rmbutton", function () {
	$(this).parent().remove();
});
