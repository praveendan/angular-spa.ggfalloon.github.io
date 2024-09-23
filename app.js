(function () {
    'use strict';

    angular.module('LunchCheck', ['ngRoute'])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.userItems = '';
        $scope.message = '';

        $scope.displayMsg = function () {
            var items = calcNumItems($scope.userItems);

            if (items == 0) {
                $scope.message = 'Please enter data first'
            } else if (items > 3) {
                $scope.message = 'Too Much!'
            } else {
                $scope.message = 'Enjoy!'
            }
        };

        function calcNumItems(str) {
            var totalItems = 0;
            
            if (str == '') {
                return totalItems
            } else {
                var strArr= str.split(',');
                for (const el of strArr) totalItems ++;
                return totalItems
            }
        }
    }
})();