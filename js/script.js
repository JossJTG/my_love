const texto = `Mi amor, se que ultimamente no estuviste muy bien, y yo te habia dicho que te daría un regalo virtual jiji. La idea principal de la carta es tratar de ayudarte lo más que pueda mi vida.  Al presionar siguiente habrán sorpresitas que espero te gusten y te ayuden. 🥺 Esta solo es una carta inicial para poder expresarte lo mucho que te amo y lo importante que eres para mi, nunca dudes de lo significas en mi vida, tu eres la N°1 en mi corazón, esa personita que si le pasa algo o se va, mi mundo completo de destruye. Una vez mas espero que te guste amor. 💖 \n\nCON MUCHO AMOR TU NIÑO`;

let i = 0;
const velocidad = 50;

// Separamos texto principal y firma
const partes = texto.split('\n\n');
const textoPrincipal = partes[0];
const firma = partes[1] || '';

function escribirCarta() {
  const contenedorTexto = document.getElementById("texto-principal");

  if (i < textoPrincipal.length) {
    let char = textoPrincipal.charAt(i);
    if (char === '\n') {
      contenedorTexto.innerHTML += '<br>';
    } else {
      contenedorTexto.innerHTML += char;
    }
    i++;
    setTimeout(escribirCarta, velocidad);
  } else {
    // Cuando termina el texto principal, agregamos la firma con estilo
    if (firma) {
      const firmaElemento = document.createElement('p');
      firmaElemento.textContent = firma;
      // Estilos para la firma
      firmaElemento.style.marginTop = '30px';
      firmaElemento.style.fontWeight = 'bold';
      firmaElemento.style.fontStyle = 'italic';
      firmaElemento.style.textAlign = 'center';
      firmaElemento.style.fontSize = '1.5rem';
      firmaElemento.style.color = '#e60000';

      contenedorTexto.appendChild(firmaElemento);
    }
  }
}

function abrirSobre() {
  const sobre = document.querySelector(".sobre");
  const botonVideo = document.getElementById("boton-video");
  const musica = document.getElementById("musica");

  if (!sobre.classList.contains("abierto")) {
    sobre.classList.add("abierto");
    escribirCarta();
    botonVideo.style.display = "block"; // mostrar "Ver video 💜"

    musica.volume = 0.5;
    const playPromise = musica.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Error reproduciendo audio:", error);
      });
    }
  }
}

function crearEstrellasEnFondo() {
  const contenedor = document.querySelector('.fondo-estrellado');
  const cantidad = 100;

  const anchoCont = window.innerWidth;
  const altoCont = window.innerHeight;

  for (let i = 0; i < cantidad; i++) {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');

    // Tamaño aleatorio 2-5 px
    const tamaño = 2 + Math.random() * 3;
    estrella.style.width = `${tamaño}px`;
    estrella.style.height = `${tamaño}px`;

    // Posición aleatoria
    const x = Math.random() * anchoCont;
    const y = Math.random() * altoCont;
    estrella.style.left = `${x}px`;
    estrella.style.top = `${y}px`;

    // Animación con duración y delay aleatorio para que no parpadeen sincronizadas
    estrella.style.animationDuration = (1 + Math.random() * 3) + 's';
    estrella.style.animationDelay = (Math.random() * 3) + 's';

    contenedor.appendChild(estrella);
  }
}

window.addEventListener('load', () => {
  crearEstrellasEnFondo();
});


function abrirModal() {
  const modal = document.getElementById("miModal");
  const musica = document.getElementById("musica");

  modal.style.display = "flex";

  // Opción 1: Pausar la música de fondo
  musica.pause();

  // Opción 2 (alternativa): bajar volumen en lugar de pausar
  // musica.volume = 0.1;
}

function cerrarModal() {
  const modal = document.getElementById("miModal");
  const musica = document.getElementById("musica");
  const botonSiguiente = document.getElementById("boton-siguiente");

  modal.style.display = "none";

  // Reanudar la música (si elegiste pausar antes)
  musica.play();
  musica.volume = 0.5; // restaurar volumen normal

  // Mostrar botón siguiente
  botonSiguiente.style.display = "block";
}
