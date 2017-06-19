$(document).ready(function(){

	if ($('.nav').css('flex-direction')=='column'){
		$('.gallery-container-main').slick('unslick');
	

	} else if ($('.nav').css('flex-direction')=='row'){
		$('.gallery-container-main').slick(
			{
				arrows: false,
				autoplay: true,
				speed: 500,
				Infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				
			});

	}

});
$(window).on('resize', function(){

	if ($('.nav').css('flex-direction')=='column'){
		$('.gallery-container-main').slick('unslick');
	

	} else if ($('.nav').css('flex-direction')=='row'){
		$('.gallery-container-main').slick(
			{
				arrows: false,
				autoplay: true,
				speed: 500,
				Infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				
			});

	}

});
// Toggle the menu
$(document).ready(function(){
	if ($('.nav').css('flex-direction')=='column'){
			$('#menu-toggle-button-close').hide();
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



$('.request-quote').on('click',function(){

	$('html,body').animate({
		scrollTop: $(document).height()
	});
});

$(document).ready(function(){
	$('.testimonials').slick(
	{
		arrows: false,
		autoplay: true
	});
});