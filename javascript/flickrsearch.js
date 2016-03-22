$(document).ready(function (){

    // do stuff when the button is clicked.
    $('form').submit(function( evt ) {

        // preventing the form from submission.
        evt.preventDefault();

        var home = $('#search').val();

        // flickr api url
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=" + home;
        // Flickr options
        var flickrOptions = {
            format: "json"
        };
        // displayPhotos
        function displayPhotos(data) {
            var photoHTML = "<ul>";

            // Looping through the images
            $.each(data.items, function( i, photo) {

                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';

            }); // ends each

            photoHTML += "</ul>";
            $('#photos').html(photoHTML);
        }

        // Running the AJAX
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);

    }); // click button

}); // ends ready.
