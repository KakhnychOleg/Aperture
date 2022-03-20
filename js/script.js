$(document).ready(function() {
  $('.header__humburger').click(function(event) {
    $('.header__humburger, .header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  })
});