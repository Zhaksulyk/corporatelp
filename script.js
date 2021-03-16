$(document).ready(function() {
$('.butt').on('click', function(e){
      e.preventDefault();
     var top = $('.twopag').offset().top;
     $('html, body').animate({
       scrollTop:top
     }, 500);
     	});
});