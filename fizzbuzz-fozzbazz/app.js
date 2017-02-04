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

  .factory('counter', function($rootScope){

      //declaring the counter in rootScope so all controller can see it
      $rootScope.count = 0;

      //fizzbuzz function that return result based on result
      var fizzbuzz = function(count){
        if(count % 5 === 0 && count % 3 === 0){
          return "fizzbuzz";
        } else if (count % 3 === 0){
          return "fizz";
        } else if (count % 5 === 0){
          return "buzz";
        } else {
          //incase its not divisble by 3 or 5 at all, just a text to click on
          return "click again";
        }
      }

      //fozzbazz function that return result based on result
      var fozzbazz = function(count){
        if(count % 4 === 0 && count % 6 === 0){
          return "fozzbazz";
        } else if (count % 4 === 0){
          return "fozz";
        } else if (count % 6 === 0){
          return "bazz";
        } else {
          //incase its not divisble by 3 or 5 at all, just a text to click on
          return "click again";
        }
      }

      return {
        fizzbuzz : fizzbuzz,
        fozzbazz : fozzbazz
      }
  })
  .controller('fizzbuzzCtrl', function($scope, $rootScope, counter){

    //just initializing the display variable with some text to click on
    $scope.display = "start";

    //increment function that increase the counter and call the fizzbuzz function
    $scope.increment = function(){

      //using the rootScope counter so its shared between both controllers
      $rootScope.count++;
      $scope.display = counter.fizzbuzz($scope.count);

    }

  })
  .controller('fozzbazzCtrl', function($scope, $rootScope, counter){

    //just initializing the display variable with some text to click on
    $scope.display = "start";

    //increment function that increase the counter and call the fizzbuzz function
    $scope.increment = function(){

      //using the rootScope counter so its shared between both controllers
      $rootScope.count++;
      $scope.display = counter.fozzbazz($rootScope.count);

    }
  });
