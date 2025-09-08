function crearEstrellasEnFondo() {
  const contenedor = document.querySelector('.fondo-estrellado');
  const cantidad = 40;

  const anchoCont = window.innerWidth;
  const altoCont = window.innerHeight;

  for (let i = 0; i < cantidad; i++) {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella-flotante');

    const x = Math.random() * anchoCont;
    const y = Math.random() * altoCont;
    estrella.style.left = `${x}px`;
    estrella.style.top = `${y}px`;

    estrella.style.setProperty('--delay', `${Math.random() * 3}s`);

    contenedor.appendChild(estrella);
  }
}

window.addEventListener('load', () => {
  crearEstrellasEnFondo();
});
