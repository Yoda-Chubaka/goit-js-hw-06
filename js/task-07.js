let changeFontSize = document.getElementById("font-size-control");

let inscription = document.getElementById("text");

changeFontSize.oninput = function() {
  inscription.style.fontSize = changeFontSize.value + "px";
};