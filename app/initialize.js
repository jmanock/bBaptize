document.addEventListener('DOMContentLoaded', function() {

  $('.dot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n);
  });// End `Dot`

  $('.next').on('click', function(){
    plusSlides(1);
  });// End `Next`

  $('.prev').on('click', function(){
    plusSlides(-1);
  });// End `Prev`
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n){
    showSlides(slideIndex += n);
  }
  function currentSlide(n){
    showSlides(slideIndex = n);
  }
  function showSlides(n){
    var i = 0;
    var slides = $('.mySlides');
    var dots = $('.dot');
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
