function Pizza() {
  this.toppings = [];
  this.size = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings 
}















//UI Logic


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for ( i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$(document).ready(function() {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
  });
});
