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