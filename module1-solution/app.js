(function(){
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList;
    $scope.evaluationMessage="";
    $scope.displayEvaluation=function(){
      var finalEvaluation = evaluateLunch($scope.lunchList);
      $scope.evaluationMessage= finalEvaluation;
    };

    function evaluateLunch(string) {
      var text;
      var numOfMeals=0;
      if (string) {
        var array = string.split(',');
        console.log(array.length)
        for (var i = 0; i < array.length; i++) {
          if (array[i].trim()) {
            numOfMeals++;
          }
        }
        if (numOfMeals<=3) {
          text="Enjoy!";
        }
        else {
          text="Too much";
        }
      }
      else {
        text = "Please enter data first";
      }
      return text;
    };

  };
})();
