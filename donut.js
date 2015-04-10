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
  var tabledata = [];
  DonutShop.prototype.donutperhour = function () {
    var numbCustomer = Math.floor(Math.random() * this.maxCus - this.minCus) + this.minCus;
    return Math.round(numbCustomer * this.average);
  };

  DonutShop.prototype.donutperday = function() {
  var total=0;
  for (var i = 0; i < this.hoursOpen; i++) {
    var dPH = this.donutperhour();
    total += dPH;
    this.hourTotal.push(dPH);

  };
  return total;
  }
  DonutShop.prototype.render = function() {
    var row = document.createElement('tr');
    var data = document.createElement('th');
    var tableName = document.createElement('td');
      data.textContent = this.store;
      row.appendChild(data);
    for (var i = 0; i < this.hoursOpen; i++) {
      var ourdata = document.createElement('td');
      ourdata.textContent = this.hourTotal[i];
      row.appendChild(ourdata);
    };
    tableName.textContent = this.donutperday();
    row.appendChild(tableName);
    return row;
    // var tbody = document.getElementById('table-body');
    // tbody.appendChild(row);
};
  var downtown = new DonutShop(8, 43, 4.50, 'Downtown');
  var capitolHill = new DonutShop(4, 37, 2.00, 'Capitol Hill');
  var slu = new DonutShop(9, 23, 6.33, 'SLU');
  var wedgewood = new DonutShop(2, 28, 1.25, 'Wedgwood');
  var ballard = new DonutShop(8, 58, 3.75, 'Ballard');
  tabledata.push(downtown);
  tabledata.push(capitolHill);
  tabledata.push(slu);
  tabledata.push(wedgewood);
  tabledata.push(ballard);
  var renderAllData = function() {
    var tableinfo = document.getElementById('table');
    tableinfo.innerHTML = "<tr id='hours'> <td>Locations</td> <td>7:00 AM</td> <td>8:00 AM</td> <td>9:00 AM</td> <td>10:00 AM</td> <td>11:00 AM</td> <td>12:00 PM</td> <td>1:00 PM</td> <td>2:00 PM</td> <td>3:00 PM</td> <td>4:00 PM</td> <td>5:00 PM</td> <td>Total</td>";
    tabledata.forEach(function(shop) {
      tableinfo.appendChild(shop.render());
    });
    return tableinfo;
  };

  downtown.donutperday();
  capitolHill.donutperday();
  slu.donutperday();
  wedgewood.donutperday();
  ballard.donutperday();
  renderAllData();
  window.DonutShop = DonutShop;
  window.tabledata = tabledata;
  window.renderAllData = renderAllData;
})();
