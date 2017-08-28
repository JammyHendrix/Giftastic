var gifs = ['Funny', 'flirty','happy', 'wave', 'cool', 'games', 'cars', 'motorcycles'];

function displayGifIinfo() {
	var gif = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		var gifDiv = $('<div class='gif'>');

		var rating = response.rating;

		var disprating = $('<p>').text('Rated: ' + rating);

		gifDiv.append(disprating);

		$('#gif-view').prepend(gifDiv);

	});
}

function renderButtons() {

	$('#buttons-view').empty();

	for (var i = 0; i < gifs.length; i++) {

		var a = $('<button>');
		a.addClass('gif');
		a.attr('data-name', gifs[]);
		a.text(gifs[i]);
		$('#buttons-view').append(a);
	}
}

	$('#add-gif').on('click', function(event) {
		event.preventDefault();

		var movie = $('#gif-input').val().trim();

		gifs.push(gif);

		renderButtons();
	});

	$(document).on('click', '.gif', displayGifIinfo);

	renderButtons();
	