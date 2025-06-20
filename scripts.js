
const detalhes = document.querySelectorAll(".detalhes-texto");

detalhes.forEach(p => {
  p.addEventListener("click", (event) => {
    // Para evitar que o clique suba para o card, evita propagação
    event.stopPropagation();

    // O pai do p é o card, então toggle nele
    const card = p.closest(".projeto-card");
    if (card) {
      card.classList.toggle("ativo");
    }
  });
});