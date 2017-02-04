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

  .factory('counter', function(){


      var fizzbuzz = function(count){
        if(count % 5 === 0 && count % 3 === 0){
          return "fizzbuzz";
        } else if (count % 3 === 0){
          return "fizz";
        } else if (count % 5 === 0){
          return "buzz";
        } else {
          return "click again";
        }
      }

      var fozzbazz = function(count){
        if(count % 4 === 0 && count % 6 === 0){
          return "fozzbazz";
        } else if (count % 4 === 0){
          return "fozz";
        } else if (count % 6 === 0){
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
  .controller('fizzbuzzCtrl', function($scope, $rootScope, counter){
    $rootScope.count = 0;
    $scope.display = "start";
    $scope.increment = function(){
      $scope.count++;
      $scope.display = counter.fizzbuzz($scope.count);
    }

  })
  .controller('fozzbazzCtrl', function($scope, $rootScope, counter){
    $scope.display = "start";
    $scope.increment = function(){
      $rootScope.count++;
      $scope.display = counter.fozzbazz($rootScope.count);
    }
  });
