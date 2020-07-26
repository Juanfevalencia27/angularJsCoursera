(function () {
 'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',splitList);

    LunchCheckController.$inject=['$scope'];

    
    function splitList($scope) {
        $scope.list="";
        $scope.wordsCheck=function () {
        $scope.lista=$scope.list.split(',').filter(el => {
            return el != null && el != '' && el !=' ';
            });
        if ($scope.lista.length==0) {
            $scope.res="Please enter data first";
            $scope.num="1"; 
               }
        else if ($scope.lista.length<=3) {
            $scope.res="Enjoy!";
            $scope.num="2";
        }
        else{
            $scope.res="Too much!";
            $scope.num="2";
            };
        }
    };

})();