(function () {
    'use strict';
       angular.module('ShoppingListCheckOff',[])
       .controller('ToBuyController',ToBuyController)
       .controller('AlreadyBoughtController',AlreadyBoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
   

       ToBuyController.$inject=['ShoppingListCheckOffService'];
       function ToBuyController(ShoppingListCheckOffService) {
        var buy=this;
        buy.items = ShoppingListCheckOffService.getToBuyItems();
        buy.toBuy= function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        }
    

        AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var Bougth = this;

            Bougth.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
        }


        function ShoppingListCheckOffService() {
            var service = this;
            var toBuyItems = [
                { name: "Galletas", quantity: 10 },
                { name: "Soda", quantity: 2 },
                { name: "Cerveza", quantity: 6 },
                { name: "Manzana", quantity: 4 },
                { name: "Banano", quantity: 7 }
            ];
            var alreadyBoughtItems = [];
    
            service.buyItem = function(itemIndex) {
                var item = toBuyItems[itemIndex];
    
                alreadyBoughtItems.push(item);
                toBuyItems.splice(itemIndex, 1);
            };
    
            service.getToBuyItems = function() {
                return toBuyItems;
            };
    
            service.getAlreadyBoughtItems = function() {
                return alreadyBoughtItems;
            };
      }

   
   })();