//displays the content while removing the tabs
$('section.homeSections').mouseenter(function() {
  $('.contentDiv').show();
  $('.sectionDiv').hide();
});

//displays the tabs while removing the display field and removing the content from the display field
$('section.projDisplay').mouseleave(function() {
  $('.sectionDiv').show();
  $('.contentDiv').hide();
  $('section.projDisplay').children().remove();
});
