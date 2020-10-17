(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject['$scope',$filter];
function LunchCheckController($scope,$filter) {
  $scope.name="";
  $scope.c="";

  $scope.count = function () {
    var words = $scope.name.split(",");
    var count1 = words.length;

    if($scope.name=="")
    {
      $scope.c="Please enter data first";
    }

    else if(count1>=1 && count1<=3)
    $scope.c="Enjoy!";

   else if(count1>=3)
    $scope.c="Too much!";

  };
}
})();
