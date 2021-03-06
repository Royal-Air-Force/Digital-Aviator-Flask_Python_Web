(function() {
  'use strict';

  angular.module('HackathonApp', [])

.controller('HackathonController', ['$scope', '$log', '$http',
  function($scope, $log, $http) {

    $scope.getResults = function() {

      $log.log("test");

      // get the URL from the input
      var userInput = $scope.url;

      // fire the API request
      $http.post('/start', {
        "url": userInput
      }).
      success(function(results) {
        $log.log(results);
      }).
      error(function(error) {
        $log.log(error);
      });

    };

  }
]);


}());
