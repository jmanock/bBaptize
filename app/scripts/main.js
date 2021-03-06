$(document).ready(function(){
  $('.movies').hide();
  $('.mDots').hide();

  $('.pictures').on('click', function(){
    $('.movies').hide();
    $('.mDots').hide();
    $('.slideshow-container').show();
    $('.pDots').show();
  });// End `.pictures`

  $('.videoLink').on('click', function(){
    $('.movies').show();
    $('.mDots').show();
    $('.slideshow-container').hide();
    $('.pDots').hide();
    showSlides(slideIndex, 'v');
  });// End `.videoLink`

  $('.dot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n, 'p');
  });// End `.dot`

  $('.vDot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n, 'v');
  });// End `.vDot`

  $('.mNext').on('click', function(){
    plusSlides(1, 'v');
  });// End `.mNext`

  $('.mPrev').on('click', function(){
    plusSlides(-1, 'v');
  });// End `.mPrev`

  $('.next').on('click', function(){
    plusSlides(1, 'p');
  });//End `.next`

  $('.prev').on('click', function(){
    plusSlides(-1, 'p');
  });// End `.prev`

  var slideIndex = 1;
  showSlides(slideIndex, 'p');

  function plusSlides(n,x){
    showSlides(slideIndex += n, x);
  }

  function currentSlide(n,x){
    showSlides(slideIndex = n, x);
  }

  function showSlides(n,x){
    if(x === 'v'){
      var slides = $('.myVslides');
      var dots = $('.vDot');
    }else{
      var slides = $('.mySlides');
      var dots = $('.dot');
    }
    if(n > slides.length){
      slideIndex = 1;
    }
    if(n < 1){
      slideIndex = slides.length;
    }
    for(var i = 0; i<slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(var i = 0; i<dots.length; i++){
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex -1].style.display = 'block';
    dots[slideIndex -1].className += ' active';
  }
});// End `Document`
