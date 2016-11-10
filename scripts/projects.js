(function(module) {
//creats a project odject made from the content in projects_list.js
  function Projects(obj) {
    for (var keys in obj) {
      this[keys] = obj[keys];
    }
  }

  Projects.theProjects = [];

  //adds projects content to the handlebars in the html
  Projects.prototype.toHtml = function() {
    var $newProject = $('#local-data-template').html();
    var projectRender = Handlebars.compile($newProject);
    return projectRender(this);
  };

  //creates a new project object
  Projects.loadAll = function(inputData) {
    inputData.forEach(function(ele) {
      Projects.theProjects.push(new Projects(ele));
    });
  };

  Projects.fetchAll = function() {
    $.get('https://api.github.com/users/joeyderosa/repos', function(data) {
      Projects.loadAll(data);
      console.log(data);
    });
  };
  Projects.fetchAll();

  Projects.numWordsAll = function() {
    return Projects.theProjects.map(function(project) {
      return project.description.split(' ').length;
    })
      .reduce(function(curr, next, index, array) {
        return curr + next;
      }, 0);
  };

  //adds the projects content to the display field
  $('section.projects').mouseenter(function() {
    $('section.projDisplay').append('h4').text('Number of words ' + Projects.numWordsAll());
    Projects.theProjects.forEach(function(project) {
      $('section.projDisplay').append(project.toHtml());
    });
  });
  module.Projects = Projects;
})(window);
