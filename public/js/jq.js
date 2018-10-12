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