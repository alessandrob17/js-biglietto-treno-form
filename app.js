var nomeCognome = document.getElementById("nome-cognome");
var distanza = document.getElementById("distanza");
var discount = document.getElementById("discount");
var buttonGenerate = document.getElementById("button-generate");
var result = document.getElementById("result");

buttonGenerate.addEventListener("click", function() {
  var distanzaValue = distanza.value;
  var discountValue = discount.value;
  var PREZZO_PER_CHILOMETRO = 0.21;
  var prezzoFinale = distanzaValue * PREZZO_PER_CHILOMETRO;

  if (discountValue === "minorenne") {
    prezzoFinale = prezzoFinale * (1 - 0.2);
  } else if (discountValue === "over") {
    prezzoFinale = prezzoFinale * (1 - 0.4);
  }

  result.innerHTML = "Costo biglietto " + prezzoFinale.toFixed(2) + " €.";
});
