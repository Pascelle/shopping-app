var item = $('.sc-input').val();
var removebutton = "<input type='submit' class='sc-remove-item' value='remove'>"
var checkbox = "<input type='checkbox' class='sc-check'>"

// adding

$('.sc-submit').click(function () {
	$('.sc-list').append("<li>" + checkbox + " " + item + " " + removebutton + "</li>");
});

// removing

$('.sc-list').on('click', '.sc-remove-item', function () {
	console.log('item removed');
	$(this).closest('li').remove();
});

// checking
// https://api.jquery.com/checked-selector/

$('.sc-list').on('click', '.sc-check', function () {
	console.log($("input:checked"))
	if ($("input:checked").length === 1) { // if checked

		$(this).closest('li')
			.css('text-decoration', 'line-through')
			.css('text-decoration-color', 'red');

	} else { // if not checked

		$(this).closest('li')
			.css('text-decoration', 'none')
			.css('text-decoration-color', '#444');
	}
});