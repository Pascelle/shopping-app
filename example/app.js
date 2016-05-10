$(document).ready(function(){
	$(.addbtn).click(function() {
		$(.itemswanted).append('<li>' + $('.addbtn').val() + '</li>');
	});

	$(.itemswanted).remove()
	
	});

	