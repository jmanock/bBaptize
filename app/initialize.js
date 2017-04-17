document.addEventListener('DOMContentLoaded', function() {
  $('.movies').hide();
  $('#movieDots').hide();
  $('.video').on('click', function(){
    $('.slideshow-container').hide();
    $('.pictureDots').hide();
    $('.movies').show();
    $('#movieDots').show();
  });

  $('.pictures').on('click', function(){
    $('.slideshow-container').show();
    $('.pictureDots').show();
    $('.movies').hide();
    $('#movieDots').hide();
  });

  /*
    ~ Add header/ footer
    ~ Change color of buttons
    ~ Add more pics and videos
    ~ Either change background color or dots color
    ~ Add captions
  */
});
