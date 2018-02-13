const Item = function(name, price, bogOf){
  this.name = name;
  this.price = price;
  this.bogOf = bogOf;
}

module.exports = Item;

//
// Items should have a name, price and boolean value that determines whether or not they are eligible for a buy one get one free discount.
