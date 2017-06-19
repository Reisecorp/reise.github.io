// Toggle the menu
$(document).ready(function(){
	if ($('.nav').css('flex-direction')=='column'){
			$('#menu-toggle-button-close').hide();
			$('.nav').hide();

	} else if ($('.nav').css('flex-direction')=='row'){
			$('.nav').show();

	}
})

$(window).on('resize',function(){
	if ($('.nav').css('flex-direction')=='row'){
			$('.nav').show();

	}
	
});
$('#menu-toggle-button').on('click',function(){
		// $(this).toggleClass( "fa-bars" );
		$('#menu-toggle-button').hide();
		$('#menu-toggle-button-close').show();

		$('.nav').slideDown({
			duration: 300,
			easing: 'swing'
		});

});

$('#menu-toggle-button-close').on('click',function(){
		// $(this).toggleClass( "fa-bars" );
		$('#menu-toggle-button').show();
		$('#menu-toggle-button-close').hide();

		$('.nav').slideUp({
			duration: 300,
			easing: 'swing'
		});

});



$(document).ready(function(){
	$('.testimonials').slick(
	{
		arrows: false,
		autoplay: true
	});
});