let valor = 0;
let fecha;

let muestraEnPantalla = (dato) => {
  alert(`El dato ingresado fue: ${dato}`);
  //Le asigno el valor del dato a la fecha
  fecha = dato;
  //Condicionales de mes
  if (fecha.includes("2021-01")) {
    alert("Enero");
  } else if (fecha.includes("2021-02")) {
    alert("Febrero");
  } else if (fecha.includes("2021-03")) {
    alert("Marzo");
  } else if (fecha.includes("2021-04")) {
    alert("Abril");
  } else if (fecha.includes("2021-05")) {
    alert("Mayo");
  } else if (fecha.includes("2021-06")) {
    alert("Junio");
  } else if (fecha.includes("2021-09")) {
    alert("Septiembre");
  }
};

do {
  valor = prompt("Ingresa tu id");
  switch (valor) {
    case "1":
      muestraEnPantalla("Job Daniel, fecha alta: 2021-09-16");
      break;
    case "5":
      muestraEnPantalla("Juan, fecha alta: 2021-05-01");
      break;
    case "6":
      muestraEnPantalla("Jose, fecha alta: 2021-01-01");
      break;
    case "14":
      muestraEnPantalla("Citlalli, fecha alta: 2021-03-15");
      break;
    case "600":
      muestraEnPantalla("Maria, fecha alta: 2021-03-11 id: 601");
      break;
    case "Salir":
      muestraEnPantalla("Salir, Hasta Luego");
      break;
    default:
      muestraEnPantalla("Erroneo, por favor ingresa un Id valido");
      break;
  }
} while (valor != "Salir");
