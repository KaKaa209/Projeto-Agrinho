document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("mostrarInfo");
  const paragrafo = document.getElementById("infoCuriosa");

  botao.addEventListener("click", function() {
    paragrafo.textContent = "O campo produz grande parte dos alimentos que chegam à cidade todos os dias.";
  });
});
