// business logic
function Pizza(name, phone, address, size, toppings){
  this.name = name;
  this.phone = phone;
  this.address = address;
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

var totalCost = 0;
var delivery = false;

// user interface logic
$(document).ready(function(){
  $('#add-address').click(function(){
    delivery = true;
    $('#delivery-address').append('<div class="remove-list">' +
                                   '<div class="form-group">' +
                                     '<label for="street-address">Street Address</label><br>' +
                                     '<input type="text" id="street-address">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="city">City</label><br>' +
                                     '<input type="text" id="city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="zip-code">Zip Code</label><br>' +
                                     '<input type="text" id="zip-code">' +
                                   '</div>' +
                                 '</div>');
  });

  $('#customize-pizza-form').submit(function(event){
    event.preventDefault();
    var size = $('input:radio[name=pizza-size]:checked').val();
    var customerName = $('#customer-name').val();
    var customerPhone = $('#customer-phone').val();
    var address = "";
    if(delivery){
      var streetAddress = $('#street-address').val();
      var city = $('#city').val();
      var zipCode = $('#zip-code').val();
      address = address.concat(streetAddress + ', ' + city + ', ' + zipCode);
    };

    var toppings = [];
    $('input:checkbox[name=toppings]:checked').each(function(){
        toppings.push($(this).val());
    });

    var newPizza = new Pizza(customerName, customerPhone, address, size, toppings);
    newPizza.calculateCost();
    totalCost += newPizza.price;

    $('#order-list').append('<li><span class="pizza-order">' + newPizza.size + ' - $' + newPizza.price + '</span></li>');
    $('.pizza-order').last().click(function(){
      $('.pizza-toppings-area h3').text(newPizza.size);
      $('#pizza-toppings-list').text('');
      newPizza.toppings.forEach(function(topping){
        $('#pizza-toppings-list').append('<li>' + topping + '</li>');
      });
    });

    $('#name').text(newPizza.name);
    $('#phone').text(newPizza.phone);
    $('#address').text(newPizza.address);
    $('#total-cost').text(totalCost);
    $('.total-area').show();
    $('.order-list-area').show();
    $('.customer-info').hide();
    $('div.remove-list').remove();
  });

});
