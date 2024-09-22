(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.userItems = '';
        $scope.message = '';
        console.log($scope.userItems);

        $scope.displayMsg = function () {
            const items = calcNumItems($scope.userItems);
            if (items > 3) $scope.message = 'Too Much!';
            if (items < 3 && items > 1) {
                $scope.message = 'Enjoy!'
            } else $scope.message = 'Please enter data first';
        }

        function calcNumItems(str) {
            const totalItems = 0;
            const strArr= str.split(',');
            for (const el of strArr) totalItems ++;
            console.log(totalItems);
            console.log(strArr)
            return totalItems
        }
    }
})