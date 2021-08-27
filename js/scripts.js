function Pizza() {
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
}















//UI Logic
let newPizza = new Pizza ([], "");
$(document).ready(function() {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();

  });
  $('#pizza-size').submit(function() {
    let size = parseInt($("input:radio[name=size]").val());

    if (size == 1){
      newPizza.size = "Candle";
    } else if (size == 2) {
      newPizza.size = "Streetlight";
    } else if (size == 3) {
      newPizza.size = "Sunny";
    } else {
      newPizza.size = "Supernova";
    }
  })
});
