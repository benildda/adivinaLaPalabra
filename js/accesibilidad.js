const contrasteAlto = document.querySelector(".btnContrasteAlto");
const btnZoomIn = document.querySelector(".btnZoomIn");
const btnZoomOut = document.querySelector(".btnZoomOut");
let parrafos = document.querySelectorAll(".parrafos");
let inputs = document.getElementsByTagName("input");
const botones = [contrasteAlto, btnZoomIn, btnZoomOut, resetBtn];
let iconoContraste = document.getElementById("iconoContraste");

contrasteAlto.onclick = () => {
  document.body.classList.toggle("contrasteAlto");
  iconoContraste.src="img/contraste_alto.png"
  if (document.body.classList.contains("contrasteAlto")) {
    for (let boton of botones) {
      boton.style.color = "#fffdcd";
      boton.style.backgroundColor=  "rgb(66, 98, 101)";

      boton.addEventListener("mouseenter", () => {
        boton.style.border = "5px solid rgb(255, 253, 205)";
      });
      boton.addEventListener("mouseleave", () => {
        boton.style.border = "5px solid transparent";
      });
    }
    divPadre.style.backgroundColor= "rgb(66, 98, 101)";
    
  } else {
    iconoContraste.src="img/contraste.png"
    for (let boton of botones) {
      boton.style.color = "black";
      boton.style.backgroundColor="rgb(138, 175, 178)";
      boton.addEventListener("mouseenter", () => {
        boton.style.border = "5px solid black";

        boton.addEventListener("mouseleave", () => {
          boton.style.border = "5px solid transparent";
        });
      });
    }
    divPadre.style.backgroundColor="rgb(138, 175, 178)";
  }
  inputLetra.focus();
}

btnZoomIn.onclick = () => {
  for (let parrafo of parrafos) {
    let tamañoActual = getComputedStyle(parrafo).fontSize;
    let tamañoActualNum = parseFloat(tamañoActual);
    let nuevoTamaño = tamañoActualNum + 5;
    parrafo.style.fontSize = nuevoTamaño + "px";
  }

  let tamañoActual = getComputedStyle(resetBtn).fontSize;
  let tamañoActualNum = parseFloat(tamañoActual);
  let nuevoTamaño = tamañoActualNum + 5;
  resetBtn.style.fontSize = nuevoTamaño + "px";
  mostrarFinal.style.fontSize = nuevoTamaño + "px";

  tamañoActual = getComputedStyle(resetBtn).width;
  tamañoActualNum = parseFloat(tamañoActual);
  nuevoTamaño = tamañoActualNum + 20;
  resetBtn.style.width = nuevoTamaño + "px";
  inputLetra.focus();
}

btnZoomOut.onclick = () => {
  for (let parrafo of parrafos) {
    let tamañoActual = getComputedStyle(parrafo).fontSize;
    let tamañoActualNum = parseFloat(tamañoActual);
    let nuevoTamaño = tamañoActualNum - 5;
    parrafo.style.fontSize = nuevoTamaño + "px";
  }

  let tamañoActual = getComputedStyle(resetBtn).fontSize;
  let tamañoActualNum = parseFloat(tamañoActual);
  let nuevoTamaño = tamañoActualNum - 5;
  resetBtn.style.fontSize = nuevoTamaño + "px";
  mostrarFinal.style.fontSize = nuevoTamaño + "px";

  tamañoActual = getComputedStyle(resetBtn).width;
  tamañoActualNum = parseFloat(tamañoActual);
  nuevoTamaño = tamañoActualNum - 20;
  resetBtn.style.width = nuevoTamaño + "px";
  inputLetra.focus();
}