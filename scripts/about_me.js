(function(module) {
  function AboutMeObj() {
    this.biography = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at blandit dolor. Nulla quis dolor vel lectus scelerisque volutpat. Curabitur sit amet fringilla erat, non semper nisl. Quisque tincidunt, dolor id posuere auctor, ex purus porta massa, pretium molestie erat neque eu tellus. Proin ut diam non nunc tempor cursus pretium non urna. Duis placerat metus sit amet velit sodales imperdiet. Mauris interdum ante dolor, eget aliquet leo pulvinar eget. Maecenas sem velit, semper ac blandit id, interdum at nunc. Curabitur quis lobortis risus, ac ornare augue. Sed neque eros, ullamcorper et odio vel, egestas interdum ex.</p><p>Maecenas vitae velit ex. Nullam bibendum urna in neque mattis, eu vehicula eros tempor. Integer eget viverra elit. Suspendisse a pretium augue. Donec aliquet ligula imperdiet ipsum pretium hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit tellus, vel aliquam nibh. Vivamus arcu ligula, sodales sit amet vulputate sagittis, condimentum dapibus lorem. Ut nec quam rhoncus felis dapibus ullamcorper. </p>';
  };

  //adds about me content to the handlebars in the html
  AboutMeObj.prototype.createAboutMe = function() {
    var $aboutMe = $('#about-me-template').html();
    var aboutMeRender = Handlebars.compile($aboutMe);
    return aboutMeRender(this);
  };
  var object = new AboutMeObj();

  //adds the about me content to the display field
  $('section.aboutMe').mouseenter(function() {
    $('section.projDisplay').append('h4').text('');
    $('section.projDisplay').append(object.createAboutMe());
  });
  module.AboutMeObj = AboutMeObj;
})(window);
