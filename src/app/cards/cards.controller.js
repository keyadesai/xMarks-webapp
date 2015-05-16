'use strict';

angular.module('xMarksWebapp')
  .controller('CardsCtrl', function ($scope, $stateParams) {
    $scope.cards = [{
      'cardid': '1',
      'title': 'Javascriptcard',
      'description': 'I am awesome',
      'categoryid': '1'
   },
   {
       'cardid': '2',
       'title': 'Jquery-card',
       'description': 'I am awesome too',
       'categoryid': '2'
   },
   {
       'cardid': '3',
       'title': 'Javascriptcard2',
       'description': 'I am awesome no 2',
       'categoryid': '1'
    }
];

    $scope.categoryid = $stateParams.categoryId;
    console.log($scope.categoryid);

});
