$(document).ready(function(){
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

	$('.right').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			fade: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			
		});
});