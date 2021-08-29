// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

	'use strict';	
	jQuery('.nav__hamburger').click(function(){
		jQuery('.nav__menu').toggle("slow");
		jQuery('.nav__menu').toggleClass("d-flex");
		jQuery('.nav__hamburger').toggleClass("open");
		open = false;
	});

	jQuery( window ).resize(function() {
		let currentWidth = jQuery( window ).width();
		let maxMobileWidth = 991;

		if(currentWidth > maxMobileWidth ) {
			jQuery('.nav__menu').css("display", "flex");
		} else {
			jQuery('.nav__menu').css("display", "none");
		}
	  });
	
	jQuery(".fancybox").fancybox();

	var slid = jQuery('#carousel-reviews');
		
	slid.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			767:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			991:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			1099:{
				items: 1,
				dots: true,
				mouseDrag: true
			}
		}
	});
	
	});