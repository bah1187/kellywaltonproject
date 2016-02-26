$(document).ready(function(){
   $(".i-nav").click(function(){
     $(".nav ul").slideToggle("slow", function(){

     });

  });


 });

 $(function() {
    $('.jcarousel')
        .jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;
});
