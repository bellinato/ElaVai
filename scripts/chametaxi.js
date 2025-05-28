document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os botões que acionam a solicitação de táxi
  const solicitarTaxiButtons = document.querySelectorAll('.btn-cta, .btn-banner');
  
  solicitarTaxiButtons.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "./chame.taxi.html";
    });
  });
});