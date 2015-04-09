
  var DonutShop = window.DonutShop;
  var newRow = document.getElementById('table');
  var newform = document.getElementById('form');
  var clearRow = document.getElementById('clear');
  var tabledata = window.tabledata;
  var renderAllData = window.renderAllData;

  var handleTableFormSubmit = function(event) {
    event.preventDefault();
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
  // clearRow.addEventListener('click', function() {
  //   newRow.textContent = '';
  //   renderAllData();
  // });

