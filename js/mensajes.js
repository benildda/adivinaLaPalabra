const elegirAcierto = function(palabra){

  const msg = [
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".`,
  ];

  const enviarAcierto = msg[Math.floor(Math.random()) * msg.length]
  return enviarAcierto;
}

const elegirError  = function(palabra){ 

  const msgError = [
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".`,
    `Has fallado OTRA VEZ!!!. La palabra correcta era "${palabra.toUpperCase()}".`,
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".`,
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... Zumo de Gato`,
    `Has fallado por no leer bien la pista, La palabra correcta era "${palabra.toUpperCase()}".`,
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".`,
  ];
  
  const enviarError = msgError[Math.floor(Math.random()) * msgError.length]
  return enviarError;
}
