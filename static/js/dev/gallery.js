$(document).ready(function(){

	if ($('.nav').css('flex-direction')=='column'){
		$('.gallery-container-main').slick('unslick');
	

	} else if ($('.nav').css('flex-direction')=='row'){
		$('.gallery-container-main').slick(
			{
				arrows: false,
				autoplay: true,
				speed: 500,
				fade: true,
				Infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				
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
				fade: true,
				Infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				
			});

	}

});