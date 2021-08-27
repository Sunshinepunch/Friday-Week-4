function Pizza() {
  this.toppings = [];
  this.size = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
}















//UI Logic

$(document).ready(function() {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
  });
  $('#submit').click(function() {
    $("#first_topping").val();
  })
});
