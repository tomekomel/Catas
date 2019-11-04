for (var i = 1; i <= 3; i++) {
  document.getElementById("button-" + i).onclick = (function(increment) {
    return function () {
      alert("Kliknięto w przycisk o numerze " + increment);
    }
  })(i);
}
