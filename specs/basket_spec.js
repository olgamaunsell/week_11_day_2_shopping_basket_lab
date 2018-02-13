const assert = require('assert');
const Basket = require('../basket');
const Item = require('../item');




  // let taxi;
  let item;
  let milk;

  let basket;
  beforeEach(function () {
    item = new Item("Biscuit", 10, true);
    milk = new Item("Milk", 1.50, false);
    basket = new Basket();

  })

  describe('Basket', function () {


  it('should have an add method', function(){
    basket.addItem(item);
    assert.deepStrictEqual(basket.items.length, 1);
  });

  it('should have a remove method', function(){
    basket.addItem(item);
    basket.removeItem(item);
    assert.deepStrictEqual(basket.items.length, 0);
  });
  it('basket should be able to calculate total cost', function(){
    basket.addItem(item);
    basket.addItem(item);
    assert.strictEqual(basket.totalCost(), 10)
  })
  it('basket should apply a 10% discount over 20', function(){
    basket.addItem(item);
    basket.addItem(item);
    basket.addItem(item);
    assert.strictEqual(basket.totalCost(), 27)
  })

  it('should apply additional 5% discount if customer discount card', function(){
    basket.addItem(item);
    basket.addItem(item);
    basket.addItem(item);
    basket.applyDiscountCard();
    assert.strictEqual(basket.totalCost(), 25.5)
  })

  it('should get 1 item if bogOf set to true', function(){
    basket.addItem(item);
    basket.addItem(item);

    assert.strictEqual(basket.totalCost(), 10)
  })

  it('should return number of items in hashMap', function(){
    basket.addItem(item);
    basket.addItem(item);
    basket.addItem(milk);
    basket.addItem(milk);

    assert.strictEqual(basket.hashMap[item.name], 2)
  })

});
