document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("mostrarInfo");
  const paragrafo = document.getElementById("infoCuriosa");

  botao.addEventListener("click", function() {
    paragrafo.textContent = "O campo produz grande parte dos alimentos que chegam à cidade todos os dias.";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("mostrarInfo");
  const paragrafo = document.getElementById("infoCuriosa");

  const curiosidades = [
    "O campo brasileiro produz alimentos que são exportados para o mundo todo.",
    "Muitas tecnologias usadas nas plantações vêm das universidades das cidades.",
    "Mais de 70% dos alimentos consumidos no Brasil vêm da agricultura familiar.",
    "As feiras livres nas cidades são um elo direto com os produtores do campo.",
    "O leite, o pão e as frutas que consumimos vêm direto do trabalho no campo."
  ];

  botao.addEventListener("click", function() {
    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    paragrafo.textContent = curiosidades[aleatorio];
  });
});
const botaoTema = document.getElementById("alternarTema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");
});
