var theProjects = [];

//creats a project odject made from the content in projects_list.js
function Projects(obj) {
  this.title = obj.title;
  this.description = obj.description;
  this.image = obj.image;
  this.link = obj.link;
}

//adds projects content to the handlebars in the html
Projects.prototype.toHtml = function() {
  var $newProject = $('#local-data-template').html();
  var projectRender = Handlebars.compile($newProject);
  return projectRender(this);
};

//creates a new project object
projectsList.forEach(function(ele) {
  theProjects.push(new Projects(ele));
});

//adds the projects content to the display field
$('section.projects').mouseenter(function() {
  theProjects.forEach(function(project) {
    $('.projDisplay').append(project.toHtml());
  });
});
