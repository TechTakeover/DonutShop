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
    console.log("donuthour");
    var numbCustomer = Math.floor(Math.random() * this.maxCus - this.minCus) + this.minCus;
    return Math.round(numbCustomer * this.average);
  };

  DonutShop.prototype.donutperday = function() {
  console.log("donuthour")
  var total=0;
  for (var i=0; i < this.hoursOpen; i++) {
    var dPH = this.donutperhour();
    total += dPH;
    this.hourTotal.push(dPH);

  };
  return total;
  }

  DonutShop.prototype.render = function() {
    var row = document.createElement("tr");
    var data = document.createElement("td");
      data.textContent = this.store;
      row.appendChild(data);
    for (var i = 0; i < this.hourTotal.length ; i++) {
        data=document.createElement("td");
      data.textContent = this.hourTotal[i];
      row.appendChild(data);
    };
    data = document.createElement('td');
    data.textContent = this.donutperday();
    row.appendChild(data);


  document.getElementById('table-body').appendChild(row);
};
  var downtown = new DonutShop(8, 43, 4.50, 'Downtown');
  var capitolHill = new DonutShop(4, 37, 2.00, 'Capitol Hill');
  var slu = new DonutShop(9, 23, 6.33, 'SLU');
  var wedgewood = new DonutShop(2, 28, 1.25, 'Wedgwood');
  var ballard = new DonutShop(8, 58, 3.75, 'Ballard');

  downtown.donutperday();
  capitolHill.donutperday();
  slu.donutperday();
  wedgewood.donutperday();
  ballard.donutperday();

  downtown.render();
  capitolHill.render();
  slu.render();
  wedgewood.render();
  ballard.render();
  window.DonutShop = DonutShop;
})();

