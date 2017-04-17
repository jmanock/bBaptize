document.addEventListener('DOMContentLoaded', function() {
  $('.video').hide();
  $('.mDots').hide();

  $('.pictures').on('click', function(){
    $('.slideshow-container').show();
    $('.pDots').show();
    $('.video').hide();
    $('.mDots').hide();
  });// End `Pictures`

  $('.movies').on('click', function(){
    $('.slideshow-container').hide();
    $('.pDots').hide();
    $('.video').show();
    $('.mDots').show();
    showSlides(slideIndex,'v');
  });// End `Moives`

  $('.dot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n,'p');
  });// End `Dot`

  $('.vDot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n,'v');
  });

  $('.mNext').on('click', function(){
    plusSlides(1,'v');
  });// End `mNext`

  $('.mPrev').on('click', function(){
    plusSlides(-1,'v');
  });// End `mPrev`

  $('.next').on('click', function(){
    plusSlides(1,'p');
  });// End `Next`

  $('.prev').on('click', function(){
    plusSlides(-1,'p');
  });// End `Prev`

  var slideIndex = 1;
  showSlides(slideIndex,'p');
  function plusSlides(n,x){
    showSlides(slideIndex += n, x);
  }
  function currentSlide(n,x){
    showSlides(slideIndex = n,x);
  }
  function showSlides(n,x){
    if(x === 'v'){
      var slides = $('.myVslides');
      var dots = $('.vDot');
    }else{
      var slides = $('.mySlides');
      var dots = $('.dot');
    }
    var i = 0;
    if(n > slides.length){
      slideIndex = 1;
    }
    if(n < 1){
      slideIndex = slides.length;
    }
    for(i = 0; i<slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(i = 0; i<dots.length; i++){
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex -1].style.display = 'block';
    dots[slideIndex -1].className += ' active';
  }
  /*
    ~ Add header/ footer
    ~ Change color of buttons
    ~ Add more pics and videos
    ~ Either change background color or dots color
    ~ Add captions
  */
});
