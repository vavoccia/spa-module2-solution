(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


//** Controller As syntax
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
  buy.moveItemToBought = ShoppingListCheckOffService.moveItemToBought
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.itemsBought = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
      { name: "Milk", quantity: "2 Bottles" },
      { name: "Soda", quantity: "1 Case" },
      { name: "Filet Mignon", quantity: "4 Pounds" },
      { name: "Baked Potatoes", quantity: "10 Pounds" },
      { name: "Cookies", quantity: "5 Bags" }
  ];
  
  var itemsBought = [];


  service.moveItemToBought = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  
   service.getItemsBought = function () {
    return itemsBought;
  }; 
  
}

})();
