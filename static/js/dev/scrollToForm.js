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
