// business logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculateCost = function () {
debugger;
  if(this.size === 'small'){
    this.price = 12;
  } else if(this.size === 'medium'){
    this.price = 16;
  } else {
    this.price = 20;
  };
  this.price = this.price + this.toppings.length;
};


// user interface logic
$(document).ready(function(){
  $('#customize-pizza-form').submit(function(event){
    event.preventDefault();
    var size = $('input:radio[name=pizza-size]:checked').val();
    var toppings = [];
    $('input:checkbox[name=toppings]:checked').each(function(){
        toppings.push($(this).val());
    });
    var newPizza = new Pizza(size, toppings);
    newPizza.calculateCost();

    $('#total-cost').text(newPizza.price);
    $('#customize-pizza-form').trigger('reset');
  });

});
