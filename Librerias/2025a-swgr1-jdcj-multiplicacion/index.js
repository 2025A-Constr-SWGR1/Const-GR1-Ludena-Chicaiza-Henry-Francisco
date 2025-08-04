exports.multiplicacion = (numeroUno, numeroDos) => {
  const numeroUnoCasteado = Number(numeroUno);
  const numeroDosCasteado = Number(numeroDos);

  if (isNaN(numeroUnoCasteado) || isNaN(numeroDosCasteado)) {
    throw new Error("Error en la validación de los números");
  }

  return numeroUnoCasteado * numeroDosCasteado;
};
