var DonutShop = window.DonutShop;
  var newRow = document.getElementById('table');
  var newform = document.getElementById('form');
  var clearRow = document.getElementById('clear');
  var tabledata = window.tabledata;
  var renderAllData = window.renderAllData;

  var handleTableFormSubmit = function(event) {
    event.preventDefault();
<<<<<<< HEAD
    debugger;

    var min = Number.parseInt(event.target.minCus.value);
    var max = Number.parseInt(event.target.maxCus.value);
    if (checkValue(min, max)) {
      console.log('checkval is true');

      var newDonutShop = new DonutShop(
        Number.parseInt(event.target.minCus.value),
        Number.parseInt(event.target.maxCus.value),
        Number.parseInt(event.target.average.value),
        event.target.store.value
        );
      event.target.minCus.value = null;
      event.target.maxCus.value = null;
      event.target.average.value = null;
      event.target.store.value = null;
      tabledata.push(newDonutShop);
      newDonutShop.donutperday();
      renderAllData();
    } else {
      console.log('false');
    }
=======
    var newDonutShop = new DonutShop(event.target.minCus.value, Number.parseInt(event.target.maxCus.value), Number.parseInt(event.target.average.value), Number.parseInt(event.target.store .value));
    event.target.minCus.value = null;
    event.target.maxCus.value = null;
    event.target.average.value = null;
    event.target.store.value = null;
    tabledata.push(newDonutShop);
    renderAllData();
>>>>>>> 914f29507db48ce2da2bb92b6197a6be832c4cca
  };

  function checkValue(minCus, maxCus) {
    console.log(minCus + ";" + maxCus);
    var result = false;
    if (minCus < maxCus) {
        result = true;
      }
        return result;
  }
  newform.addEventListener('submit', handleTableFormSubmit);
