(function () {
'use strict';

angular.module('myAngApp', [])

.controller('MyController',  MyController);

MyController.$inject = [$scope, $filter]

function MyController ($scope, $filter) {
    $scope.name =  '';
    $scope.totalValue = 0;

    $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };

    $scope.displayNum = function () {
        var totalNameValue = calcNumForString($scope.name);
        $scope.totalValue = totalNameValue;
    };

    function calcNumForString(str) {
        var totalStrVal = 0;
        for (var i = 0; i < str.length; i++) {
            totalStrVal += str.charCodeAt(i);
        }
        return totalStrVal;
    }

    };
})();