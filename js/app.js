$(document).ready(function(){
	$('form').submit(function(e) { 
		e.preventDefault();
		var item = $('.textbox').val();
		var removebutton = "<input type='submit' class='rmvbtn' value='remove'>"
		var checkbox = "<input type='checkbox' class='chkbx'>"
		$('.itemswanted').append("<li>" + checkbox + " " + item + " " + removebutton + "</li>");
	});

	 /* $('.rmvbtn').click(function() { 
		 console.log('item removed');
		this.closest('li').remove();
	 }); */


	$('.itemswanted').on('click', '.rmvbtn', function() { console.log('item removed');
		$(this).closest('li').remove();
});

	$('.itemswanted').on('click', '.chkbx', function() { console.log('item crossed out');
		$(this).closest('li').css({
			'text-decoration': 'line-through',
			'text-decoration-color': '#000',
		});

	}); 

	
});

	