document.addEventListener('DOMContentLoaded', function() {
  $('.movies').hide();
  $('.video').on('click', function(e){
    e.preventDefault();
    $('.slideshow-container').hide();
    $('.dot').hide();
    $('.movies').show();
  });
  $('.pictures').on('click', function(){
    $('.slideshow-container').show();
    $('.dot').show();
    $('.movies').hide();
  });
  /*
    ~ Add header/ footer
    ~ Change color of buttons
    ~ Add more pics and videos
    ~ Either change background color or dots color
    ~ Add captions
  */
});
