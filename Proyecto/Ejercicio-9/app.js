//Desarrollar una función llamada “calcular” que recibe 2 parámetros:

// El primero: un número entero con la cantidad de amigos del Tecler.
// El segundo: una función que utilizaremos como callback.

//Mostrar los siguientes console.log dentro de cada función:

// Hola Tecler
// Hola callback

let callBack = (saludo) => {
  console.log(saludo);
};

let calcular = () => {
  let amigos1 = document.getElementById("amigos1").value;
  if (amigos1 == "") {
    alert("Ingresa un numero");
  } else if (isNaN(amigos1)) {
    alert("El valor debe ser un numero");
  } else {
    alert(`Hola Teclanauta tienes ${amigos1} amigos`);
  }
  setTimeout(() => {
    callBack("Hola Callback");
  }, 3000);
};

//Desarrollar  un programa con una función que, agregando cualquier cantidad de amigos, permita ordenarlos alfabéticamente. Utilizar arrays para solucionar el problema.
let amigos = [];

let agregarAmigos =()=>{
    amigos.push(document.getElementById('amigos2').value)
    let amigosOrdenados = amigos.sort()
    console.log(amigosOrdenados)

    let tabla = "<h2></h2>";

    for (let amigo of amigosOrdenados) {
      tabla += `<h2>${amigo}</h2></br>`;
    }
    document.getElementById("contenedorAmigos").innerHTML = tabla;
    document.getElementById("contenedorAmigos").style.display = "block";
}


let borrarAmigos = () =>{
    amigos = [];
    document.getElementById("contenedorAmigos").style.display = "none";
}
