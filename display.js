$('section').mouseenter(function() {
  $('.contentDiv').fadeIn();
  $('.sectionDiv').fadeOut();
});

$('section.projDisplay').mouseleave(function() {
  $('.sectionDiv').fadeIn();
  $('.contentDiv').fadeOut();
  $('section.projDisplay').children().remove();
});
