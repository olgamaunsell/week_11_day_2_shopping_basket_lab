const assert = require('assert');
const Basket = require('../basket');
const Item = require('../item');




  // let taxi;
  let biscuit;
  let milk;

  let basket;
  beforeEach(function () {
    biscuit = new Item("Biscuit", 10, true);
    milk = new Item("Milk", 1.50, false);
    basket = new Basket();

  })

  describe('Basket', function () {


  it('should have an add method', function(){
    basket.addItem(biscuit);
    assert.deepStrictEqual(basket.items.length, 1);
  });

  it('should have a remove method', function(){
    basket.addItem(biscuit);
    basket.removeItem(biscuit);
    assert.deepStrictEqual(basket.items.length, 0);
  });
  it('basket should be able to calculate total cost', function(){
    basket.addItem(biscuit);
    basket.addItem(biscuit);
    assert.strictEqual(basket.totalCost(), 10)
  })
  it('basket should apply a 10% discount over 20', function(){
    basket.addItem(biscuit);
    basket.addItem(biscuit);
    basket.addItem(biscuit);
    assert.strictEqual(basket.totalCost(), 27)
  })

  it('should apply additional 5% discount if customer discount card', function(){
    basket.addItem(biscuit);
    basket.addItem(biscuit);
    basket.addItem(biscuit);
    basket.applyDiscountCard();
    assert.strictEqual(basket.totalCost(), 25.5)
  })

  it('should get 1 item if bogOf set to true', function(){
    basket.addItem(biscuit);
    basket.addItem(biscuit);

    assert.strictEqual(basket.totalCost(), 10)
  })

  it('should return number of items in hashMap', function(){
    basket.addItem(biscuit);
    basket.addItem(biscuit);
    basket.addItem(milk);
    basket.addItem(milk);

    assert.strictEqual(basket.hashMap[item.name], 2)
  })

});
