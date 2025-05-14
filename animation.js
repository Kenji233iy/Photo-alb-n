// Animación al hacer scroll: aparecer elementos al entrar en pantalla
document.addEventListener("DOMContentLoaded", () => {
  const fotos = document.querySelectorAll('.foto');

  const mostrarFoto = (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(mostrarFoto);
  }, {
    threshold: 0.5
  });

  fotos.forEach((foto) => {
    observer.observe(foto);
  });
});