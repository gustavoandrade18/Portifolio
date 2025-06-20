
const detalhes = document.querySelectorAll(".detalhes-texto");

detalhes.forEach(p => {
  p.addEventListener("click", (event) => {

    // O pai do p é o card, então muda ele
    const card = p.closest(".projeto-card");
    if (card) {
      card.classList.toggle("ativo");
    }
  });
});
  // Zoom de imagens
  const overlay = document.getElementById('imageOverlay');
  const zoomedImage = document.getElementById('zoomedImage');
  const zoomables = document.querySelectorAll('.zoomable');

  zoomables.forEach(img => {
    img.addEventListener('click', () => {
      zoomedImage.src = img.src;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });