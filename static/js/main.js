$('#footer-form-submit-button').on('click',function(){
	$('#footer-form-submit-button').text("Thanks, We'll contact you soon!");
	$("form").submit();
});
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
$(document).ready(function(){

	$('.request-quote').on('click',function(){

		$('html,body').animate({
			scrollTop: $(document).height()
		});
	});
	$('.handpicked-offers-more').on('click',function(){

		$('html,body').animate({
			scrollTop: $(document).height()
		});
	});	
});	
