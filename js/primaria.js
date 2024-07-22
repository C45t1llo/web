function verificarRespuesta(numeroEjercicio) {
  // Definir las respuestas correctas para cada ejercicio
  const respuestas = {
      1: "Sumar", // Corregido para el ejercicio 1
      2: "Sumar 5",
      3: "40",
      4: "Multiplicar por 2",
      5: "8",
      6: "María",
      7: "Laura",
      8: "Gafas de sol",
      9: "2 m²",
      10: "5 m²",
      11: "1 litro"
  };

  // Obtener la respuesta seleccionada por el usuario
  const radios = document.getElementsByName('respuesta' + numeroEjercicio);
  let respuestaSeleccionada = null;
  for (const radio of radios) {
      if (radio.checked) {
          respuestaSeleccionada = radio.value;
          break;
      }
  }

  // Obtener los elementos de resultado y explicación
  const resultado = document.getElementById('resultado' + numeroEjercicio);
  const explicacion = document.getElementById('explicacion' + numeroEjercicio);
  const mensajeMotivacional = document.getElementById('mensajeMotivacional' + numeroEjercicio);

  // Verificar si se seleccionó alguna respuesta
  if (!respuestaSeleccionada) {
      alert("Por favor, selecciona una respuesta.");
      return;
  }

  // Comparar la respuesta seleccionada con la respuesta correcta
  const respuestaCorrecta = respuestas[numeroEjercicio];
  if (respuestaSeleccionada === respuestaCorrecta) {
      resultado.textContent = "¡Correcto!";
      resultado.style.color = "#4CAF50"; // Verde
      reproducirSonido('audioCorrecto');
  } else {
      resultado.textContent = "Incorrecto. Inténtalo de nuevo.";
      resultado.style.color = "#FF6F61"; // Rojo coral
      reproducirSonido('audioIncorrecto');
      mostrarMensajeMotivacional(mensajeMotivacional);
  }

  // Mostrar la explicación del ejercicio
  mostrarExplicacion(explicacion);
}

// Función para mostrar la explicación del ejercicio
function mostrarExplicacion(explicacion) {
  explicacion.style.display = 'block';
}

// Función para mostrar mensajes motivacionales
function mostrarMensajeMotivacional(mensajeMotivacional) {
  let mensajes = [
      "¡No te preocupes! Inténtalo de nuevo, cada intento es un paso hacia aprender más.",
      "¡Casi lo tienes! Sigue intentándolo, seguro encontrarás la respuesta.",
      "¡Eso es! Aunque no sea la respuesta correcta, es genial que estés intentándolo.",
      "Recuerda, equivocarse es parte del proceso de aprendizaje. ¡Sigue adelante!"
  ];

  let mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  mensajeMotivacional.textContent = mensaje;
}

// Función para reproducir sonidos
function reproducirSonido(idAudio) {
  let audio = document.getElementById(idAudio);
  if (audio) {
      audio.currentTime = 0;
      audio.play();
  } else {
      console.log('Elemento de audio con id ' + idAudio + ' no encontrado en el HTML.');
  }
}

// Asignar la función a cada botón de comprobación
document.querySelectorAll('.ejercicio button').forEach(button => {
  button.addEventListener('click', () => {
      const id = button.closest('.ejercicio').id.replace('ejercicio', '');
      verificarRespuesta(Number(id));
  });
});






function comprobarRespuesta(ejercicioId, respuestaCorrecta) {
  const respuestaSeleccionada = document.querySelector(`input[name='respuesta${ejercicioId}']:checked`);
  const resultadoDiv = document.getElementById(`resultado${ejercicioId}`);
  const mensajeMotivacionalDiv = document.getElementById(`mensajeMotivacional${ejercicioId}`);

  if (respuestaSeleccionada) {
      if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.textContent = '¡Correcto!';
          resultadoDiv.style.color = 'green';
          mensajeMotivacionalDiv.style.display = 'none';
          document.getElementById(`audioCorrecto`).play();
      } else {
          resultadoDiv.textContent = 'Incorrecto, intenta de nuevo.';
          resultadoDiv.style.color = 'red';
          mensajeMotivacionalDiv.textContent = getMensajeMotivacional();
          mensajeMotivacionalDiv.style.display = 'block';
          document.getElementById(`audioIncorrecto`).play();
      }
  } else {
      resultadoDiv.textContent = 'Selecciona una opción.';
      resultadoDiv.style.color = 'orange';
      mensajeMotivacionalDiv.style.display = 'none';
  }
}

function getMensajeMotivacional() {
  const mensajes = [
      "¡No te rindas, sigue intentando!",
      "¡Casi lo tienes, un poco más!",
      "¡Buena tentativa, sigue practicando!",
      "¡Sigue así, vas muy bien!",
      "¡Estás mejorando, sigue adelante!"
  ];
  return mensajes[Math.floor(Math.random() * mensajes.length)];
}
