//Business Logic
let cost = 0;

function Pizza() {
  this.toppings = [];
  this.size = "";
}



Pizza.prototype.findCost = function () {
  if(this.size == "Candle") {
    cost += 8;
  } else if (this.size == "Streetlight") {
    cost += 10;
  } else if (this.size == "Sunny") {
    cost += 12;
  } else if (this.size == "Supernova") {
    cost += 16;
  }
  if(this.toppings.includes("Pepperoni") && this.toppings.includes("Bacon")) {
    cost += 4;
  } else if (this.toppings.includes("Pepperoni") || this.toppings.includes("Bacon")) {
    cost += 2;
  } else if (this.toppings.includes("Vegee-tables") || this.toppings.includes("Mystery Meat")) {
    cost += 1;
  } else {
    cost += 0;
  }
  return "$" + cost;
}


//UI Logic


function makePizza() {
  let toppingOne = document.getElementById("first").value;
  let toppingTwo = document.getElementById("second").value;
  let toppingThree = document.getElementById("third").value;
  let pizzaSize = document.getElementById("pizza-size").value;
  newPizza.toppings.push(toppingOne);
  newPizza.toppings.push(toppingTwo);
  newPizza.toppings.push(toppingThree);
  newPizza.size = pizzaSize;
}


let orderSize = 0
let newPizza = new Pizza ([], "");
$(document).ready(function() {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    let size = parseInt($("input:radio[name=size]").val());
    if (size === 1){
      newPizza.size = "Candle";
    } else if (size === 2) {
      newPizza.size = "Streetlight";
    } else if (size === 3) {
      newPizza.size = "Sunny";
    } else {
      newPizza.size = "Supernova";
    }
    orderSize += 1;
    $("#hungry").show();
    $("#finalCost").text(newPizza.findCost());
    $("#numOfPizzas").text("Current Order Size: "+ orderSize);
    $("#orderSize").text(orderSize);
  });
});
