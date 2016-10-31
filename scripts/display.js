//displays the content while removing the tabs
$('section').mouseenter(function() {
  $('.contentDiv').fadeIn();
  $('.sectionDiv').fadeOut();
});

//displays the tabs while removing the display field and removing the content from the display field
$('section.projDisplay').mouseleave(function() {
  $('.sectionDiv').fadeIn();
  $('.contentDiv').fadeOut();
  $('section.projDisplay').children().remove();
});
