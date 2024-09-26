(function () {
    'use strict';
    
    angular.module('ShoppingListCheckoff', [])
    .controller('ToBuyController', ToBuyItemsController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckoffService', ShoppingListCheckoffService);
    
    ToBuyItemsController.$inject = ['ShoppingListCheckoffService'];
    function ToBuyItemsController(ShoppingListCheckoffService) {
        var toBuy = this;
        toBuy.toBuyItems = ShoppingListCheckoffService.getToBuyItems();
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
    function AlreadyBoughtController(ShoppingListCheckoffService) {
      var bought = this;
    
      bought.boughtItems = ShoppingListCheckoffService.getBoughtItems();
    
    //   showList.removeItem = function (itemIndex) {
    //     ShoppingListService.removeItem(itemIndex);
    //   };
    }
    
    
    function ShoppingListCheckoffService() {
      var service = this;
    
      // List of shopping items
      var toBuyItems = [
        {
            name: "Flour",
            quantity: "2"
        },
        {
            name: "Sushi",
            quantity: "10"
        },
        {
            name: "Lemons",
            quantity: "4"
        },
        {
            name: "Apples",
            quantity: "3"
        },
        {
            name: 'Yogurt',
            quantity: 1
        }
      ];
 
      var boughtItems = [];

      service.getToBuyItems = function (){
        return toBuyItems;
      }

      service.getBoughtItems = function () {
        return boughtItems;
      };

      service.boughtItem = function (itemIndex) {
        toBuyItems.splice(itemIndex, 1)
        boughtItems.push(itemIndex);
      };
    
    //   service.removeItem = function (itemIndex) {
    //     items.splice(itemIndex, 1);
    //   };
    
      
    }
    
    })();