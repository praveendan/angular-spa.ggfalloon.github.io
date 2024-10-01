(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"

    function FoundItemsDirective (){
        var ddo = {
                scope: {
                    found: '<',
                    onRemove: '&'
                },
                controller: NarrowItDownController,
                bindToController: true,
                controllerAs: 'items',
                templateUrl: 'foundItems.html'
        }
        return ddo
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var found = this;
        found.foundItems = MenuSearchService.getMatchedMenuItems(searchStr);

    }
    
    
    function MenuSearchService() {
      var service = this;

      service.getMatchedMenuItems = function (searchTerm) {
            // to do

        // return $http(...).then(function (result) {
        //     // process result and only keep items that match
        //     var foundItems...
        
        //     // return processed items
        //     return foundItems;
        // });
      };
    }

    })();