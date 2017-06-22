// Toggle the menu
$(document).ready(function(){
	if ($('.nav').css('flex-direction')=='column'){
			$('.nav').hide();

	} else if ($('.nav').css('flex-direction')=='row'){
			$('.nav').show();

	}
});

$(window).on('resize',function(){
	if ($('.nav').css('flex-direction')=='row'){
			$('.nav').show();

	}
	
});
$('.menu-toggle').on('click',function(){

		$('.nav').slideToggle({
			duration: 300,
			easing: 'swing'
		});

});


