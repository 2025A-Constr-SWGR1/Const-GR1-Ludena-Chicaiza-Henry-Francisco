exports.division = (numeroUno, numeroDos) => {
  const numeroUnoCasteado = Number(numeroUno);
  const numeroDosCasteado = Number(numeroDos);

  if (isNaN(numeroUnoCasteado) || isNaN(numeroDosCasteado)) {
    throw new Error("Los números no son válidos");
  }

  if (numeroDosCasteado === 0) {
    throw new Error("Error al dividir por cero");
  }

  return numeroUnoCasteado / numeroDosCasteado;
};
