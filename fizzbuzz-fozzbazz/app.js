angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($scope){
      $scope.counter = 0;

      var fizzbuzz = function(counter){
        if(counter % 5 === 0 && counter % 3 === 0){
          return "fizzbuzz";
        } else if (counter % 3 === 0){
          return "fizz";
        } else if (counter % 5 === 0){
          return "buzz";
        } else {
          return "click again";
        }
      }

      var fozzbazz = function(counter){
        if(counter % 4 === 0 && counter % 6 === 0){
          return "fozzbazz";
        } else if (counter % 4 === 0){
          return "fozz";
        } else if (counter % 6 === 0){
          return "bazz";
        } else {
          return "click again";
        }
      }

      return {
        fizzbuzz : fizzbuzz,
        fozzbazz : fozzbazz
      }
  })
  .controller('fizzbuzzCtrl', function($scope, counter){
    $scope.counter = 0;
    $scope.increment = function(){
      $scope.display = counter.fizzbuzz($scope.counter);
    }

  })
  .controller('fozzbazzCtrl', function(){
    $scope.increment = function(){
      $scope.display = counter.fozzbazz($scope.counter);
    }
  });
