$(document).ready(function () {
	$(document).ready(function () {
		$("#toggle-color-navbar").click(function () {
			$(".navbar").toggleClass("color-onClick-menu");
		});
	});

	$('ul.nav li.dropdown').hover(function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	
});

$(window).scroll(function () {
	if ($("nav").offset().top > 120) {
		$("nav").addClass("navbar-after-scroll");
	} else {
		$("nav").removeClass("navbar-after-scroll");
	}
}); 

// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});