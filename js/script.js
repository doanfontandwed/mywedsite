jQuery(document).ready(function($){
	
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
	});
});

jQuery(document).ready(function(){
	var who = jQuery('#testimonials-container-1');
	who.find('.testimonials-content').height( who.find('.testimonials-content .testimonial.active > p').height() + who.find('.testimonials-content .testimonial.active > span').height() +40 );
	who.find('.testimonial-nav a').on('click', function(e){
		e.preventDefault();
	});
	who.find('.testimonial-nav a').on('mouseenter', function(){
		who.find('.testimonial-nav a').removeClass('active');
		jQuery(this).addClass('active');
		who.find('.testimonial.active').removeClass('active');
		who.find(jQuery(this).attr('href')).addClass('active');
		who.find('.testimonials-content').height( who.find('.testimonials-content .testimonial.active > p').height() + who.find('.testimonials-content .testimonial.active > span').height() +40 );
	});
});
