
$(document).ready(function () {
  var $contact = $('#contact');
  $contact.css("opacity", 0);
  $contact.waypoint(function () {
    $contact.css("opacity", 1).addClass("bounceInLeft animated");
  },
  {
    offset: '60%'
	});

	$('ul.nav li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
});