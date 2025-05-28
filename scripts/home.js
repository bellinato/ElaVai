// Exemplo de ação com botão (você pode expandir isso depois)

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os botões de solicitação de táxi
  const solicitarTaxiButtons = document.querySelectorAll('.btn-cta');
  
  solicitarTaxiButtons.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "./chame.taxi.html";
    });
  });

  const btnBanner = document.querySelector('.btn-banner');
  if (btnBanner) {
    btnBanner.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "./chametaxi.html";
    });
  }
});
