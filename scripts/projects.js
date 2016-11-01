
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
  if (localStorage.projects_list) {
    $.ajax({
      url: 'data/projects_list.json',
      type: 'HEAD',
      success: function(data, msg, xhr) {
        var parseEtag = jQuery.parseJSON(localStorage.etag);
        if(parseEtag !== xhr.getResponseHeader('ETag')) {
          localStorage.projects_list = JSON.stringify(data);
          Projects.loadAll(data);
        } else {
          Projects.loadAll(jQuery.parseJSON(localStorage.projects_list));
        }
      }
    });
  } else {
    $.getJSON('data/projects_list.json').done(function(data, msg, xhr) {
      localStorage.projects_list = JSON.stringify(data);
      var etag = xhr.getResponseHeader('ETag');
      localStorage.etag = JSON.stringify(etag);
      Projects.loadAll(data);
    });
  }
};
Projects.fetchAll();
//adds the projects content to the display field
$('section.projects').mouseenter(function() {
  Projects.theProjects.forEach(function(project) {
    $('.projDisplay').append(project.toHtml());
  });
});
