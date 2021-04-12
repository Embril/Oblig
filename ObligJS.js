//model
Show();
var i = 0;
var x = 1;

//view
Show();
function Show() {
  document.getElementById('app').innerHTML = `
    <div id="container">
    <div id="header">Covid counter</div>
    <div id="inner-container">
      <div id="inner-head">Header</div>
      <div id="inner-grid">
        <div id="plus" onclick="add(x)">+</br></div>
        <div id="gap"></div>
        <div id="minus" onclick="min()">-</br></div>
        <div id="gap"></div>
        <div id="display">${i}</div>
        <div id="gap"></div>
        <div id="gap"></div>
        <div id="reset" onclick="reset();">Reset</div>
        <div id="gap"></div>
      </div>
    </div>
    <div id="footer"> Produsert av </br> Emil Sjursen </br> 07.04.2021</div>
  </div>`;
}

//controller
function reset() {
  i = 0;
  Show();
}

function add() {
  if ((i) => 0 && i < 10) {
    i += x;
  }
  if (i == 10) {
    alert('Maks kapasitet i lokalet er nådd');
  }
  Show();
}

function min() {
  if (i > 0) {
    i -= x;
  } else if ((i = 0)) {
    i = 0;
  }
  Show();
}
