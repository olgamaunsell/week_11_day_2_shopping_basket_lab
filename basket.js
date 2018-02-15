const Basket = function(){
  this.items = [];
  this.discountCard = false;
  this.hashMap = {};

}

Basket.prototype.addItem = function(item){
    this.items.push(item)
    if (this.hashMap[item.name] === undefined){
      this.hashMap[item.name] = 1;
    }
    else {
      this.hashMap[item.name] += 1
      }
}

Basket.prototype.removeItem = function(item){
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);

}

Basket.prototype.totalCost = function(){
  let total = 0;


  for(const item of this.items){
    if (this.hashMap[item.name] % 2 == 0) {
      total += (item.price /2);
    }

    total += item.price
  }


  if(total > 20){

      if (this.discountCard){
        total = total * 0.85;
      }else{
          total = total * 0.9;
      }

  } else {
      if (this.discountCard){
        total = total * 0.95;
      }
  }


  return total;
}

Basket.prototype.applyDiscountCard = function(){
  this.discountCard = true;
}

module.exports = Basket;
