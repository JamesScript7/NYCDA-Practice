$(document).ready(function(){
  var width = '100vw'
  var currentSlide = 1;
  var $slide = $('#slider .slide')
  setInterval(function(){
    $('#slider').animate({'margin-left':'-='+width}, 2000, function(){
      currentSlide++;
      if(currentSlide === $slide.length){
        currentSlide = 1;
        $('#slider').css('margin-left', 0)
      }
    });
  }, 3000)
})