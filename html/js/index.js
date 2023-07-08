
$(document).ready(function(){ 

	$(".ic.menu").click(function(){
		$("a.ic.menu").toggleClass("open");
		$(".navbar-collapse").toggleClass('show');
	});
	  
	$(".banner_carousel").owlCarousel({
		loop:true,
		nav:true,
		items:1,
	});

})

$(window).scroll(function() {
	if ($(this).scrollTop() > 20) {
		$('header').addClass('fixed-header');
	} else {
		$('header').removeClass('fixed-header');
	}
});