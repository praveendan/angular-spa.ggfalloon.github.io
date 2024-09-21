(function () {
'use strict';

angular.module('myAngApp', [])

.controller('MyController', function ($scope) {
$scope.name =  '';
$scope.totalValue = 0;

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

    });
})();