'use strict';

angular.module('xMarksWebapp')
  .controller('CategoriesCtrl', function ($scope, $location) {
    $scope.categories = [
  {
      'categoryId': '1',
      'name': 'Javascript',
      'parentCategoryId': '',
      'description': 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
   },
   {
      'categoryId': '2',
      'name': 'Jquery',
      'parentCategoryId': '1',
      'description': 'Lorem ipsum'
  },
  {
     'categoryId': '3',
     'name': 'Bootstrap',
     'parentCategoryId': '',
     'description': 'Lorem ipsum'
  }
];

$scope.goToCards = function(categoryId) {
  $location.path('/cards/' + categoryId);
}

});
