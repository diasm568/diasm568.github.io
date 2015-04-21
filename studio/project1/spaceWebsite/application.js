var Trigger = { num: 0 };

var text = ['A flickering speck of light',
			'A flickering speck of light',
			'A flickering speck of light',
			'A flickering speck of light',
			'Held together by transient',
			'Moments of euphoria',
			'A concept',
			'The illusory consumed'
			];

var image = ['none',
			'none',
			'none',
			'none',
			'IMG_8592.JPG',
			];

$('.enter-icon-black').click(function() {
	event.preventDefault();
	$(this).fadeOut();
	$('.text').html(text[Trigger.num]).fadeIn('slow');
	$('.navigation').fadeIn('slow');
	play_sound();
});

function play_sound() {
	$('.audio-controller').trigger('play');
}
		
$(document).keyup(function(event) {

console.log(Trigger.num);
	event.preventDefault();
	
	if (event.keyCode == 38) {
	if (Trigger.num < 8) {
		$(Trigger.num = Trigger.num + 1);
		} else {
				$('.enter-icon-black').fadeIn('slow');
				$('.text').fadeOut('slow');
				$('.audio-controller').trigger('pause');
		}
		
	} else if (event.keyCode == 40) {
		if (Trigger.num > 0) {
			Trigger.num = Trigger.num - 1;
		}		
	}	
	if (Trigger.num < 8) {
		$('.text').fadeOut('slow', function() {
	
	$('.text').html(text[Trigger.num]).fadeIn('slow');
	$('#changingImage').html('<img src=""' + image[Trigger.num] + '">');
	
	});
	}
});