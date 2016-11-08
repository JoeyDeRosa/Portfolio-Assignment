(function(module) {
  var password = 'accessGranted';
  var passAtempts = 0;
  var access = false;
  $('#password-input').focus();
  $('#password-input').on('keydown', function(enter) {
    if(enter.which === 13) {
      if($('#password-input').val() === password) {
        $('.password').hide();
        $('.contentDiv').show();
        console.log('works');
      } else {
        $('#password-input').val('');
        ++passAtempts;
      }
      if(passAtempts > 4) {
        $('.password').remove('password-input').append('<p></p>').text('You have tried to many times to access the admin page.');
      }
    }
  });

  editAboutME();

  function editAboutME() {
    var $aboutMeEdit = $('#about-me-edit');
    $aboutMeEdit.val(module.AboutMeObj.biography);
    $('#submit-about-me').on('click', function(enter) {
      console.log('about me updated');
      module.AboutMeObj.biography = $aboutMeEdit.val();
    });
  }
})(window);
