(function($) {
	'use strict';

	// Windows load
	$(window).on('load', function() {
		
		// Site loader
		$('.loader-inner').fadeOut();
		$('.loader').delay(200).fadeOut('slow');
		
		initializeMap();
		
		// Map setup
		function initializeMap() {
			
			var styles = [
					{
						'featureType': 'administrative',
						'stylers': [{
							'visibility': 'on'
						},
							{
								'color': '#757575'
							},
							{
								'weight': .2
							}
						
						]
					}, {
						'featureType': 'landscape',
						'stylers': [{
							'color': '#dddddd'
						}, ]
					}, {
						'featureType': 'poi',
						'stylers': [{
							'visibility': 'off'
						}]
					}, {}, {
						'featureType': 'transit',
						'stylers': [{
							'visibility': 'off'
						}]
					}, {
						'featureType': 'water',
						'stylers': [{
							'color': '#d5d5d5'
						},
							{
								'visibility': 'simplified'
							}
						]
					}, {
						'featureType': 'road',
						'stylers': [{
							'visibility': 'simplified'
						},
							{
								'color': '#bebebe'
							},
							{
								'weight': .6
							}
						]
					}, {
						'featureType': 'road',
						'elementType': 'labels.text.fill',
						'stylers': [{
							'visibility': 'on'
						},
							{
								'color': '#999999'
							}
						]
					}
				
				],
				
				lat = 59.4346968,
				lng = 24.7711943,
				
				customMap = new google.maps.StyledMapType(styles, {
					name: 'Styled Map'
				}),
				mapOptions = {
					zoom: 14,
					scrollwheel: false,
					disableDefaultUI: true,
					draggable: true,
					center: new google.maps.LatLng(lat, lng),
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP]
					}
				},
				map = new google.maps.Map(document.getElementById('map'), mapOptions),
				myLatlng = new google.maps.LatLng(lat, lng),
				marker = new google.maps.Marker({
					position: myLatlng,
					map: map
				});
			
			map.mapTypes.set('map_style', customMap);
			map.setMapTypeId('map_style');
			
			
			
			var transitLayer = new google.maps.TransitLayer();
			transitLayer.setMap(map);
			
			
			
		}
	});
	
	document.addEventListener('DOMContentLoaded', function() {
		$('a.scroll').smoothScroll({
			speed: 800,
			offset: -57
		});
		
		var header = $('.header'),
			pos = header.offset();
		
		$(window).scroll(function() {
			if ($(this).scrollTop() > pos.top + 500 && header.hasClass('default')) {
				header.fadeOut('fast', function() {
					$(this).removeClass('default').addClass('switched-header').fadeIn(200);
				});
			} else if ($(this).scrollTop() <= pos.top + 500 && header.hasClass('switched-header')) {
				header.fadeOut('fast', function() {
					$(this).removeClass('switched-header').addClass('default').fadeIn(100);
				});
			}
		});
		
		// Slider
		// $('.slider').flexslider({
		// 	animation: 'fade',
		// 	slideshow: true,
		// 	directionNav: true,
		// 	controlNav: false,
		// 	pauseOnAction: false,
		// 	animationSpeed: 500
		// });
		//
		// $('.gallery-slider').flexslider({
		// 	animation: 'fade',
		// 	slideshow: true,
		// 	directionNav: true,
		// 	controlNav: false,
		// 	pauseOnAction: false,
		// 	animationSpeed: 500
		// });
		
		$('.review-slider').flexslider({
			animation: 'slide',
			slideshow: true,
			directionNav: true,
			controlNav: false,
			pauseOnAction: false,
			animationSpeed: 500
		});
		
		// Mobile menu
		var mobileBtn = $('.mobile-but');
		var nav = $('.main-nav ul');
		
		$(mobileBtn).on('click', function() {
			$('.toggle-mobile-but').toggleClass('active');
			nav.slideToggle();
			$('.main-nav li a').addClass('mobile');
			return false;
			
			
		});
		
		$(window).resize(function() {
			var w = $(window).width();
			if (w > 320 && nav.is(':hidden')) {
				nav.removeAttr('style');
				$('.main-nav li a').removeClass('mobile');
			}
			
		});
		
		$('.main-nav li a').on('click', function() {
			if ($(this).hasClass('mobile')) {
				nav.slideToggle();
				$('.toggle-mobile-but').toggleClass('active');
			}
			
		});
		
		// Tabbed content
		$('.block-tabs li').on('click', function() {
			if (!$(this).hasClass('active')) {
				var tabNum = $(this).index();
				var nthChild = tabNum + 1;
				$('.block-tabs li.active').removeClass('active');
				$(this).addClass('active');
				$('.block-tab li.active').removeClass('active');
				$('.block-tab li:nth-child(' + nthChild + ')').addClass('active');
			}
		});
		
		
		// Special zoom
		$('.block-special').on('mouseenter', function() {
			$(this).closest('.special').find('.block-special').removeClass('active');
			$(this).addClass('active');
		});
		
		// Append images as css background
		
		// for (var i = 0; i < $('.background-img').length; i++) {
		//
		// 	var path = $('.background-img').eq(i).children('img').attr('src');
		// 	$('.background-img').eq(i).css('background', 'url("' + path + '")');
		// 	$('.background-img').eq(i).addClass('parallax');
		// 	$('.background-img').eq(i).children('img').detach();
		// 	$('.background-img').eq(i).css('background-position', 'initial');
		//
		// }
		
		
	});


	
	// Form validation 

	// var reservationForm = $('.reservation-form');
	// reservationForm.validate({
	// 	validClass: 'valid',
	// 	errorClass: 'error',
	// 	errorPlacement: function(error, element) {
	// 		return true;
	// 	},
	// 	onfocusout: function(element, event) {
	// 		$(element).valid();
	// 	},
	// 	rules: {
	// 		email: {
	// 			required: true,
	// 			email: true
	// 		}
	// 	},
	//
	// 	rules: {
	// 		name: {
	// 			required: true,
	// 			minlength: 3
	// 		}
	// 	}
	//
	//
	// });
	


})(jQuery);