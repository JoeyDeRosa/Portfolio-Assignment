$('section').mouseenter(function() {
  $('.contentDiv').fadeToggle();
  $('.sectionDiv').fadeToggle();
});

$('section').mouseleave(function() {
  $('.sectionDiv').fadeToggle();
  $('.contentDiv').fadeToggle();
  $('section.projDisplay').children().remove();
});
