
$(document).ready(function () {
  var $contact = $('#contact');
  $contact.waypoint(function () {
    $contact.addClass('bounceInLeft animated');
  },
    {
      offset: '60%'
    });


});