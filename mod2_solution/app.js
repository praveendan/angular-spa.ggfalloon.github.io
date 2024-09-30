(function () {
    'use strict';
    
    angular.module('ShoppingListCheckoff', ['ngRoute'])
    .controller('ToBuyController', ToBuyItemsController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckoffService', ShoppingListCheckoffService);
    
    ToBuyItemsController.$inject = ['ShoppingListCheckoffService'];
    function ToBuyItemsController(ShoppingListCheckoffService) {
        var toBuy = this;
        toBuy.toBuyItems = ShoppingListCheckoffService.getToBuyItems();

        toBuy.boughtItem = function (itemIndex, item) {
            ShoppingListCheckoffService.boughtItem(itemIndex, item);
         };
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
    function AlreadyBoughtController(ShoppingListCheckoffService) {
      var bought = this;
    
      bought.boughtItems = ShoppingListCheckoffService.showBoughtItems();
   
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

      service.boughtItem = function (index, item) {
            var item = {
                name: item.name,
                quantity: item.quantity
            };
            toBuyItems.splice(index, 1)
            boughtItems.push(item)
            getBoughtItems();
      };

      service.showBoughtItems = function () {
        return boughtItems;
      };

      function getBoughtItems() {
        return boughtItems;
    }
    }
    })();