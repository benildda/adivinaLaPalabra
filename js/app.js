const vidasJugadorSegunPalabra = function () {
  if (palabra.length <= 7) {
    return 6
  } else {
    return 8
  }
}

const compararLetras = function () {
  let letraIntroducida = inputLetra.value.toUpperCase();
  let letraEncontrada = false;

  if (patternLetras.test(letraIntroducida) && !todasLasIntroducidas.includes(letraIntroducida)) {
    todasLasIntroducidas.push(letraIntroducida);
    for (let i = 0; i < arrayPalabra.length; i++) {
      if (arrayPalabra[i] === letraIntroducida) {
        listaInputs[i].value = letraIntroducida;
        listaInputs[i].style.boxShadow = "0px 0px 20px green";
        letrasAcertadas.push(letraIntroducida);
        letraEncontrada = true;
      }
    }
    if (!letraEncontrada) {
      vidasJugador--;
      mostrarErrores.style.color = "red";
      mostrarErrores.innerHTML += letraIntroducida;
    }
  }
  inputLetra.value = "";
  mostrarVidas.innerHTML = vidasJugador;
  inputLetra.focus();

}

const acabaONo = function (mensajeAcierto, mensajeError) { 
  if (vidasJugador === 0) {
    mostrarFinal.innerHTML = mensajeError;
    inputLetra.style.visibility = "hidden";
    juegoAcabado = true;
  }
  if (letrasAcertadas.length === arrayPalabra.length) {
    mostrarFinal.innerHTML = mensajeAcierto;
    inputLetra.style.visibility = "hidden";
    juegoAcabado = true;
  }
  inputLetra.focus();
}


const resetearContenidos = function () {
  listaInputs = [];
  letrasAcertadas = [];
  todasLasIntroducidas = [];
  mostrarErrores.innerHTML = "";
  mostrarFinal.innerHTML = "";
  mostrarVidas.innerHTML = vidasJugador;
  mostrarPista.innerHTML = acertijo.pista;
}


const resetearJuego = function () {
  inputLetra.style.visibility = "visible";
  acertijo = acertijoElegido();
  palabra = acertijo.palabra.toUpperCase();
  arrayPalabra = palabra.split("");
  mensajeAcierto = elegirAcierto(palabra);
  mensajeError = elegirError(palabra);
  vidasJugador = vidasJugadorSegunPalabra();
  juegoAcabado = false;
  resetearContenidos();

  while (divPadre.lastChild) {
    divPadre.removeChild(divPadre.lastChild);
  }

  for (let i = 0; i < arrayPalabra.length; i++) {
    let input = document.createElement("input");
    input.setAttribute("disabled", "");
    input.value = "";
    divPadre.appendChild(input);
    listaInputs.push(input);
  }

  inputLetra.value = "";
  inputLetra.focus();
}

inputLetra.addEventListener("keyup", compararLetras);
inputLetra.addEventListener("keyup", () => acabaONo(mensajeAcierto, mensajeError));

resetBtn.onclick = () => {
  resetearJuego();
};

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (juegoAcabado === true) {
      resetearJuego();  
    }
  }
});

resetearJuego();
