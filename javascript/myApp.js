


angular.module('myApp', ['ngAnimate'])
  .controller('SlideCtrl', function ($scope) {
         $scope.slides = [
            {image: 'images/diningroom4.jpg', description: 'Image 00'},
            {image: 'images/livingroom.jpg', description: 'Image 01'},
             {image: 'images/bedroom1.jpg', description: 'Image 02'},
             {image: 'images/bedroom2.jpg', description: 'Image 03'},
             {image: 'images/bedroom3.jpg', description: 'Image 04'},
             {image: 'images/bedroom5.jpg', description: 'Image 05'},
             {image: 'images/bedroom6.jpg', description: 'Image 06'},
             {image: 'images/bedroom7.jpg', description: 'Image 07'},
             {image: 'images/bedroom8.jpg', description: 'Image 08'},
             {image: 'images/bedroom9.jpg', description: 'Image 09'},
             {image: 'images/bedroom10.jpg', description: 'Image 10'},
             {image: 'images/diningroom1.jpg', description: 'Image 11'},
             {image: 'images/diningroom2.jpg', description: 'Image 12'},
             {image: 'images/diningroom3.jpg', description: 'Image 13'},
             {image: 'images/diningroom5.jpg', description: 'Image 14'},
             {image: 'images/diningroom6.jpg', description: 'Image 15'},
             {image: 'images/diningroom7.jpg', description: 'Image 16'},
             {image: 'images/diningroom8.jpg', description: 'Image 17'},
             {image: 'images/livingroom1.jpg', description: 'Image 18'}
         ];
         $scope.direction = 'left';
         $scope.currentIndex = 0;

         $scope.setCurrentSlideIndex = function (index) {
             $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
             $scope.currentIndex = index;
         };

         $scope.isCurrentSlideIndex = function (index) {
             return $scope.currentIndex === index;
         };

         $scope.prevSlide = function () {
             $scope.direction = 'left';
             $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
         };

         $scope.nextSlide = function () {
             $scope.direction = 'right';
             $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
         };

     })
     .animation('.slide-animation', function () {
         return {
             beforeAddClass: function (element, className, done) {
                 var scope = element.scope();

                 if (className == 'ng-hide') {
                     var finishPoint = element.parent().width();
                     if(scope.direction !== 'right') {
                         finishPoint = -finishPoint;
                     }
                     TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                 }
                 else {
                     done();
                 }
             },
             removeClass: function (element, className, done) {
                 var scope = element.scope();

                 if (className == 'ng-hide') {
                     element.removeClass('ng-hide');

                     var startPoint = element.parent().width();
                     if(scope.direction === 'right') {
                         startPoint = -startPoint;
                     }

                     TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                 }
                 else {
                     done();
                 }
             }
         };
     });
