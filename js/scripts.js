// business logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculateCost = function () {
debugger;
  if(this.size === 'Small'){
    this.price = 12;
  } else if(this.size === 'Medium'){
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

    $('#order-list').append('<li><span class="pizza-order">' + newPizza.size + '</span></li>');
    $('.pizza-order').last().click(function(){
      $('.pizza-toppings-area h3').text(newPizza.size);
      $('#pizza-toppings-list').text('');
      newPizza.toppings.forEach(function(topping){
        $('#pizza-toppings-list').append('<li>' + topping + '</li>');
      });
    });

    $('#total-cost').text(newPizza.price);
    $('#customize-pizza-form').trigger('reset');
    $('.order-list-area').show();
  });

});
