$(document).ready(function(){
  $('.unslider').unslider({
  autoplay: true
  });

   $(".i-nav").click(function(){
     $(".nav ul").slideToggle("slow", function(){

     });

  });

});
