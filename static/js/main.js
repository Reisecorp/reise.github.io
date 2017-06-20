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
	$('.why-us-content-title').slick(
		{
			arrows: false,
			autoplay: true,
			speed: 500,
			fade: true,
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



$(document).ready(function(){

	$('.request-quote').on('click',function(){

		$('html,body').animate({
			scrollTop: $(document).height()
		});
	});
	$('#gallery').on('click',function(){

		$('html,body').animate({
			scrollTop: $('.gallery-container-title').offset().top
		});
	});
	$('#services').on('click',function(){

		$('html,body').animate({
			scrollTop: $('.services-title').offset().top
		});
	});	
});	
