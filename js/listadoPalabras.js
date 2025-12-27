const listado = [
  {
    palabra: "alberto",
    pista: "Solo se quita los cascos cuando Montse le habla",
  },
  {
    palabra: "isma",
    pista: "Viene a clase a ver el fútbol",
  },
  {
    palabra: "isaac",
    pista: "Es grande por dentro y por fuera",
  },
  {
    palabra: "ferran",
    pista: "A pesar de Gregorio, sigue viniendo a clase",
  },
  {
    palabra: "montse",
    pista: "Llega siempre tarde y hasta que no llega su compañero de al lado no está feliz",
  },
  {
    palabra: "paula",
    pista: "La benjamina del trio PAM",
  },
  {
    palabra: "juanma",
    pista: "El infiltrado!",
  },
  {
    palabra: "dai",
    pista: "Ya no está pero siempre se LA recordará",
  },
    {
    palabra: "jose",
    pista: "Anque no lo parezca, está",
  }
];

const acertijoElegido = function () {
  let numRandom = Math.floor(Math.random() * listado.length);
  acertijo = listado[numRandom];
  return acertijo;
}
 