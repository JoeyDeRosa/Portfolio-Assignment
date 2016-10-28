var theProjects = [];

function Projects(obj) {
  this.title = obj.title;
  this.description = obj.description;
  this.image = obj.image;
  this.link = obj.link;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('#local-data-template').html();
  var projectRender = Handlebars.compile($newProject);
  return projectRender(this);
};

projectsList.forEach(function(ele) {
  theProjects.push(new Projects(ele));
});

theProjects.forEach(function(project) {
  $('.projDisplay').append(project.toHtml());
});
