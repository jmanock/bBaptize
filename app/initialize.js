document.addEventListener('DOMContentLoaded', function() {
  $('.video').on('click', function(e){
    e.preventDefault();
    $('.slideshow-container').hide();
    $('.dot').hide();
    $('.videos').show();
  });
  $('.pictures').on('click', function(){
    $('.slideshow-container').show();
    $('.dot').show();
    $('.videos').hide();
  });
});
