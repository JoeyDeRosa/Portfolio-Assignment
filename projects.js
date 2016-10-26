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
  $newProject.find('a').attr('href', this.link);
  $newProject.find('img.projectImg').attr('src', this.image);
  $newProject.find('p').text(this.description);
  $newProject.removeClass('projects');
  return $newProject;
};

projectsList.forEach(function(ele) {
  theProjects.push(new Projects(ele));
});

theProjects.forEach(function(project) {
  $('article.projects').append(project.toHtml());
});
