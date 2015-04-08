'use strict';
(function() {
  var DonutShop = function (minCus, maxCus, average, store, open, close) {
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.average = average;
    this.store = store;
    this.open = open || 700;
    this.close = close || 1800;
    this.hoursOpen = (this.close - this.open)/100;
    this.hourTotal = [];
  };

  DonutShop.prototype.donutperhour = function () {
    var numbCustomer = Math.floor(Math.random() * this.maxCus - this.minCus) + this.minCus;
    return Math.round(numbCustomer * this.average);
  };

  DonutShop.prototype.donutperday = function() {
  var total=0
  for (var i=0; i < this.hoursOpen; i++) {
    total += this.donutperhour();
  };
  return total;
  }

  DonutShop.prototype.render = function() {
    var dayTotal = this.donutperday();
    var elTr = document.getElementById(this.store);
    for (var i = 0; i <= this.hourTotal.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourTotal[i];
      elTr.appendChild(el);
      el.textContent = dayTotal;
      elTr.appendChild(el);
    }
  };

  var downtown = new DonutShop(8, 43, 4.50, "1");
  var capitolHill = new DonutShop(4, 37, 2.00, "2");
  var slu = new DonutShop(9, 23, 6.33, "3");
  var wedgewood = new DonutShop(2, 28, 1.25, "4");
  var ballard = new DonutShop(8, 58, 3.75, "5");

  downtown.render();
  capitolHill.render();
  slu.render();
  wedgewood.render();
  ballard.render();
  window.DonutShop = DonutShop;
})();

