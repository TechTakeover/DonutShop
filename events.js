(function() {
  var DonutShop = window.DonutShop;
  var newRow = document.getElementById('addrow');
  var newform = document.getElementById('form');
  var clearRow = document.getElementById('clear');
  var tabledata = [];

  var renderAllData = function() {
    newRow.innerHTML = '';
    tabledata.foreach(function(DonutShop) {
      newRow.appendChild(DonutShop.render());
    });
  };

  var handleTableFormSubmit = function(event) {
    event.preventDefault();
  }
  var newDonutShop = new DonutShop(event.target.store.value, event.target.minCus.value, event.target.maxCus.value, event.target.average.value);
    event.target.store.value = null;
    event.target.minCus.value = null;
    event.target.maxCus.value = null;
    event.target.average.value = null;
    tabledata.push(newDonutShop);
    renderAllData();

  newform.addEventListener('submit', handleTableFormSubmit);
  clearRow.addEventListener('click', function() {
    newRow.innerHTML = '';
    tabledata = [];
  });
})();
