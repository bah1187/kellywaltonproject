angular.module('app').controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      'url': 'images/diningroom4.jpg',

      'thumbUrl': 'images/diningroom4.jpg' // used only for this example
    },
    {
      'url': '2.gif',
      'thumbUrl': 'thumb2.jpg'
    },
    {
      'url': '3.png',
      'thumbUrl': 'thumb3.png'
    }
  ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});
