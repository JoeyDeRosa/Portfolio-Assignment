var theProjects = [];

function Projects(obj) {
  this.title = obj.title;
  this.description = obj.description;
  this.image = obj.image;
  this.link = obj.link;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('article.projects').clone();
  $newProject.find('h3').text(this.title);
  $newProject.find('a').attr('href', this.link).html('<img class="projectImg" />');
  $newProject.find('img.projectImg').attr('src', this.image);
  $newProject.find('p').text(this.description);
  $newProject.removeClass('projects');
  return $newProject;
};

projectsList.forEach(function(ele) {
  theProjects.push(new Projects(ele));
});

theProjects.forEach(function(project) {
  $('section.projects').append(project.toHtml());
});

$('section').mouseenter(function() {
  $(this).children().not('h2').fadeIn('slow');
});

$('section').mouseleave(function() {
  $(this).children().not('h2').fadeOut('slow');
});
