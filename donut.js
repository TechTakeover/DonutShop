(function () {
  var DonutShop = function (minCus, maxCus, averageDon, location, options) { //Make DonutShop Object w/ parameters//
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.averageDon = averageDon;
    this.open = options.open || 700;
    this.close = options.close || 1800;
    this.hoursOpen = (this.closes - this.open)/100;
    this.hourTotal = [];
    this.location = location;
  };
  DonutShop.prototype.donutperhour = function () {//create donutperhour prototype to calculate donuts per hour per customer//
    var numbCustomer = Math.floor(Math.random() * this.maxCus - this.minCus) + this.minCus;
    return Math.round(numbCustomer * this.averageDon);
  };

  DonutShop.prototype.donutsPerDay = function() {
  var total=0
  for (var i=0; i < this.hoursOpen; i++) {
    total += this.donutsPerHour();
  };
return total;
};
//create function to add data to table//
  DonutShop.prototype.render = function () {
    var dayTotal = this.donutperday(); //put daily total = to donuts per day//
    var elTr = document.getElementById(this.location);
    for (var i = 0; i <= this.hourTotal.length; i++) {
      var el = document.createElement('td'); //create TD for table//
      el.textContent = this.hourTotal[i]; //set textContent for hourTotal array
      elTr.appendChild(el);//add Hours to table//
    }
    el.textContent = dayTotal; //set textContent for the day total//
    elTr.appendChild(el); //add dayTotal to table//
  }; //Fill locations with data//
  var downtown = new DonutShop(8, 43, 4.50, "1");
  var capitolHill = new DonutShop(4, 37, 2.00, "2");
  var slu = new DonutShop(9, 23, 6.33, "3");
  var wedgewood = new DonutShop(2, 28, 1.25, "4");
  var ballard = new DonutShop(8, 58, 3.75, "5");
  //add locations to render prototype//
  downtown.render();
  capitolHill.render();
  slu.render();
  wedgewood.render();
  ballard.render();
})();

//Will's code helped me understand this project better//
