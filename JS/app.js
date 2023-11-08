const edades = [];
let contador = 0;

while (contador < 8) {
  const input = prompt(`Ingrese la edad de la persona en años sin comas y puntos ${contador + 1}`);
  const edad = parseInt(input);

  if (!isNaN(edad) && Number.isInteger(edad) && input !== "" && !input.includes(".") && !input.includes(",")) {
    edades.push(edad);
    contador++;
  } else {
    alert("Por favor, ingrese un número entero válido sin decimales, comas o puntos.");
  }
}

function calcularEdadPromedio(edades) {
  if (edades.length === 0) {
    return "No se ingresaron edades válidas.";
  }

  const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);

  return sumaEdades / edades.length;
}

const promedio = calcularEdadPromedio(edades);

if (typeof promedio === "number") {
  alert(`El promedio de edades ingresadas es: ${promedio.toFixed(2)}`);
} else {
  alert(promedio);
}
