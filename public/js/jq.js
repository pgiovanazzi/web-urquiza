
$(document).ready(function () {
  var $contact = $('#contact');
  $contact.css("opacity", 0);
  $contact.waypoint(function () {
    $contact.css("opacity", 1).addClass("bounceInLeft animated");
  },
  {
    offset: '60%'
  });
});