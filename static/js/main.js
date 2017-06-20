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
 (function ($) {
     var jump = function (e) {
         if (e) {
             e.preventDefault();
             var target = $(this).attr("href");
         } else {
             var target = location.hash;
         }
         $('html,body').animate({
             scrollTop: $(target).offset().top
         }, 1000, function () {
             location.hash = target;
         });
     }

     $(document).ready(function () {
         $("[href^='#']").bind("click", jump);

         if (location.hash) {
             setTimeout(function () {

                 $('html, body').scrollTop(0).show()
                 jump();

             }, 0);
         } else {

             $('html, body').show();

         }
     });
 })(jQuery)
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
});	
