(function() {
  var DonutShop = window.DonutShop;
  var newRow = document.getElementById('table');
  var newform = document.getElementById('form');
  var clearRow = document.getElementById('clear');
  var tabledata = window.tabledata;
  var renderAllData = window.renderAllData;

  var handleTableFormSubmit = function(event) {
    event.preventDefault();
    var newDonutShop = new DonutShop(event.target.minCus.value, Number.parseInt(event.target.maxCus.value), Number.parseInt(event.target.average.value), Number.parseInt(event.target.store .value));
    event.target.minCus.value = null;
    event.target.maxCus.value = null;
    event.target.average.value = null;
    event.target.store.value = null;
    tabledata.push(newDonutShop);
    renderAllData();
  };
  newform.addEventListener('submit', handleTableFormSubmit);
  // clearRow.addEventListener('click', function() {
  //   newRow.textContent = '';
  //   renderAllData();
  // });
})();
