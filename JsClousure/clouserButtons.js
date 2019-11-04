for (var i = 1; i <= 3; i++) {
  document.getElementById("button-" + i).onclick = function() {
    alert("Kliknięto w przycisk o numerze " + i);
  };
}
