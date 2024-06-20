'use strict';

$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Isotope Filter
	--------------------*/
	var $container = $('.isotope_items');
	$container.isotope();

	$('.portfolio-filter li').on("click", function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");				 
		var selector = $(this).attr('data-filter');
		$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Jayona,.Kenny.SDTP.resume.pdf';  // Ensure this path is correct
    link.download = 'Jayona,.Kenny.SDTP.resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


(function($){

	/*------------------
  		HEADER
  	--------------------*/
	var navMenu = $('.menu-list')
		navMenu.onePageNav();
	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > 70) {
			$('.header-section').addClass('sticky');
		}else{
			$('.header-section').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('.responsive').on('click', function(event) {
		$('.menu-list').slideToggle(400);
		$('.header-section').toggleClass('bgc');
		event.preventDefault();
	});

	$('.menu-list li a').on('click', function(event) {
		if ($(window).width() < 768) {
			$('.menu-list').slideUp(400);
			$('.header-section').removeClass('bgc');
		}
	});



	/*------------------
		TYPED JS
	--------------------*/
	$(".element").typed({
		strings: ["I'm Kenny Jayona", "Web Designer", "From Philippines"],
		typeSpeed: 10,
		loop:true,
		backDelay: 2000
	});



	/*------------------
		FOOTER
	--------------------*/
	var fh = $('.footer-section').height();
		fh = fh + 140;
	$('.main-warp').css('margin-bottom', fh);

	

	/*------------------
		PROGRESS BAR
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>100%</span></div>');
		}
	});



	/*------------------
		OWL CAROUSEL
	--------------------*/
	$('#review-carousel').owlCarousel({
		dots: false,
		nav: true,
		loop: true,
		margin:30,
		smartSpeed: 700,
		items:1,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});



	/*------------------
		MAGNIDIC POPUP
	--------------------*/
	$('.work-item').magnificPopup({
		type: 'image',
		gallery: { enabled: true },
		removalDelay: 400,
		zoom:{enabled: true, duration: 300}
	});


	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();


	/*------------------
		CONTACT FORM
	--------------------*/
	$('#contact-form').on('submit', function() {
		var send_btn = $('#send-form'),
			form = $(this),
			formdata = $(this).serialize(),
			chack = $('#form-chack');
			send_btn.text('Successfully Sent!');

		function reset_form(){
		 	$("#name").val('');
			$("#email").val('');
			$("#massage").val('');
		}

		$.ajax({
			url:  $(form).attr('action'),
			type: 'POST',
			data: formdata,
			success : function(text){
				if (text == "success"){
					send_btn.addClass('done');
					send_btn.text('Success');
					setTimeout(function() {
						reset_form();
						send_btn.removeClass('done');
						send_btn.text('Massage');
					}, 2500);
				}
				else {
					reset_form();
					send_btn.addClass('error');
					send_btn.text('Error');
					setTimeout(function() {
						send_btn.removeClass('error');
						send_btn.text('Massage');
					}, 5000);
				}
			}
		});
		return false;
	});

	window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    // Adjust the offset (200) to control when the footer appears
    if (scrollPosition + windowHeight >= bodyHeight - 200) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});


})(jQuery);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    var from = document.getElementById('from').value;
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;

    if (from.trim() === '' || subject.trim() === '' || body.trim() === '') {
        alert('Please fill out all required fields.');
        event.preventDefault();
    } else if (!validateEmail(from)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Display an alert based on the status in the URL
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');

    if (status === 'success') {
        alert('Message sent successfully.');
    } else if (status === 'error') {
        alert('Failed to send message. Please try again.');
    } else if (status === 'invalid-email') {
        alert('Invalid email address. Please check your input.');
    }
});
