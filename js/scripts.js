// business logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculateCost = function () {
  if(this.size === 'small'){
    this.price = 12;
  } else if(this.size === 'medium'){
    this.price = 16;
  } else {
    this.price = 20;
  };
  return this.price + toppings.length;
};


// user interface logic
