$(document).ready(function () {
  $(".flick").click(function () {
    $(".flick").removeClass("selected");
    $(this).addClass("selected");
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var picture = $(this).text();
    var flickrOptions = {
    tags: picture,
    format:"json"

    };
    function displayPhotos(data){
      var photoHTML = "<ul>";
      $.each(data.items, function(i,photo){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="'+ photo.media.m + ' "></a></li>';
      });
      photoHTML +='</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });

});
