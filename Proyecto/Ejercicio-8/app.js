//1.-Inicializamos nuestras variables
let valor = 0;
let fecha;

//2.-Inicializo mi funcion muestra en pantalla
let muestraEnPantalla = (dato) => {
  alert(`El dato ingresado fue: ${dato}`);

  //5.-Le asigno el valor del dato a la fecha
  fecha = dato;
  //6.-Condicionales de mes
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

//3.-Ciclo
do {
  valor = prompt("Ingresa tu id");
  //4.- Agregamos los casos
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
      alert("Hasta Luego");
      break;
    default:
      muestraEnPantalla("Erroneo, por favor ingresa un Id valido");
      break;
  }
} while (valor != "Salir");
