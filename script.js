// Más adelante puedes cambiar los enlaces de las tarjetas por páginas de juegos.
document.querySelectorAll('.game-card').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (card.getAttribute('href') === '#') {
      event.preventDefault();
      alert('Esta tarjeta es un ejemplo. Cuando añadas un juego HTML, enlázalo aquí.');
    }
  });
});
