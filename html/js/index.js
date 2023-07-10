$(window).scroll(function () {
	if ($(this).scrollTop() > 20) {
		$('header').addClass('fixed-header');
	} else {
		$('header').removeClass('fixed-header');
	}
});

$(".back-to-top").click(function () { return $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1 });

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});

$(document).ready(function () {

	$(".ic.menu").click(function () {
		$("a.ic.menu").toggleClass("open");
		$(".navbar-collapse").toggleClass('show');
	});

	$(".banner_carousel").owlCarousel({
		loop: true,
		nav: true,
		items: 1,
	});

	$(".testimonial-carousel").owlCarousel({
		loop: true,
		nav: true,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:3,
				margin:20,
			}
		}
	});

	$(".partners-carousel").owlCarousel({
		loop: true,
		nav: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	});

	$(".entertainment-partners").owlCarousel({
		loop: true,
		nav: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	});


	$(".affiliations-carousel").owlCarousel({
		loop: true,
		nav: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	});

	$(".grid-carousel").owlCarousel({
		loop: true,
		nav: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
		}
	});


})

