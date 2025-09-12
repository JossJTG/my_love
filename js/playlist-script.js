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

// Datos de las playlists con sus canciones
const playlists = {
  triste: {
    titulo: "Tranquila, trataré de alegrarte un poquito",
    canciones: [
      { nombre: "Audio 1", src: "audio/triste/triste_1.mp3" },
      { nombre: "Audio 2", src: "audio/triste/triste_2.mp3" },
      { nombre: "Audio 3", src: "audio/triste/triste_3.mp3" }
    ]
  },
  alegre: {
    titulo: "Si tu eres feliz, yo soy feliz",
    canciones: [
      /*{ nombre: "Audio 1", src: "audio/alegre/alegre1.mp3" },*/
      /*{ nombre: "Audio 2", src: "audio/alegre/alegre2.mp3" },*/
      /*{ nombre: "Audio 3", src: "audio/alegre/alegre3.mp3" }*/
    ]
  },
  insegura: {
    titulo: "Lo entiendo pero ante mis ojos y los de Dios tu eres perfecta 😍",
    canciones: [
      { nombre: "Audio 1", src: "audio/insegura/insegura_1.mp3" },
      { nombre: "Audio 2", src: "audio/insegura/insegura_2.mp3" },
      { nombre: "Audio 3", src: "audio/insegura/insegura_3.mp3" }
    ]
  },
  sola: {
    titulo: "Tal vez no estoy a tu lado fisicamente, pero estoy en tu mente, en tu corazon y ahora aqui en esta web para que me sientas cerca de ti 🥰 al menos un poquito 🥺",
    canciones: [
      { nombre: "Audio 1", src: "audio/sola/sola_1.mp3" },
      { nombre: "Audio 2", src: "audio/sola/sola_2.mp3" },
      { nombre: "Audio 3", src: "audio/sola/sola_3.mp3" }
    ]
  },
  historias: {
    titulo: "Los recuerdos estan en nosotros, y hoy vengo a contarte los nuestros que viven en mi mente",
    canciones: [
      { nombre: "Audio 1", src: "audio/historias/historia_1.mp3" },
      { nombre: "Audio 2", src: "audio/historias/historia_2.mp3" },
      /*{ nombre: "Audio 3", src: "audio/historias/cancion3.mp3" }*/
    ]
  },
  canciones: {
    titulo: "Son algunas canciones que me gustan y me recuerdan a ti mi amor, tal vez te gusten o tal vez no, pero estarán aqui en caso de que no sepas que escuchar",
    canciones: [
      { nombre: "100 años - HA-ASH", src: "audio/canciones/100 años.mp3" },
      { nombre: "SOU FAVELA", src: "audio/canciones/sou favela.mp3" },
      { nombre: "TU POETA", src: "audio/canciones/tu poeta.mp3" }
    ]
  }
};

window.addEventListener('load', () => {
  crearEstrellasEnFondo();

  const params = new URLSearchParams(window.location.search);
  const playlistElegida = params.get('playlist');

  const tituloElem = document.getElementById('titulo-playlist');
  const contenedor = document.querySelector('.playlist-container');
  const reproductor = document.getElementById('reproductor');

  if (!playlistElegida || !playlists[playlistElegida]) {
    tituloElem.textContent = "Playlist no encontrada";
    return;
  }

  // Mostrar título
  tituloElem.textContent = playlists[playlistElegida].titulo;

  // Crear lista de canciones
  playlists[playlistElegida].canciones.forEach(cancion => {
    const div = document.createElement('div');
    div.classList.add('cancion-item');
    div.textContent = cancion.nombre;
    div.addEventListener('click', () => {
      reproductor.src = cancion.src;
      reproductor.play();
    });
    contenedor.appendChild(div);
  });
});
