$(document).ready(function(){
	$('.gallery-container-main').slick(
		{
			arrows: false,
			speed: 500,
			fade: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false
			
		});
	$('.gallery-container-nav').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			Infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			draggable: false,
			centerMode: true,
			focusOnSelect: true,
			asNavFor: '.gallery-container-main',
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,

					}
				}
			]
			
		});	
	$('.icon-slider').slick(
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
			autoplaySpeed: 5000,
			speed: 500,
			fade: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			
		});
	$('.services-table').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			autoplaySpeed: 5000,
			dots: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			
		});	
	$('.summer-destinations-list').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			fade: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			
		});
	$('.testimonials').slick(
		{
		arrows: false,
		autoplay: true
	});
	$('#food-slider').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			fade: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			
		});
	$('#acco-slider').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			fade: true,
			Infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			
		});
	$('#transport-slider').slick(
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