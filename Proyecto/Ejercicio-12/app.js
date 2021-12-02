//Desarrollar un algoritmo (pseudocódigo) que permita leer tres valores de likes de la red social por foto y almacenarlos en las variables A, B y C respectivamente.
// let A = 0;
// let B = 0;
// let C = 0;

// let ingresaValor = () =>{
//     A = parseInt(prompt('Ingresa el Primer Valor'))
//     B = parseInt(prompt('Ingresa el Segundo Valor'))
//     C = parseInt(prompt('Ingresa el Tercer Valor'))
// }

//NOTA: El algoritmo debe imprimir cuál es el mayor y cuál es el menor. Recuerda constatar que los tres valores introducidos por el teclado sean valores distintos.
// let diferenciar = () =>{
//     ingresaValor()
//     if(A === B || B === C || A === C){
//         alert('Los valores deben ser distintos entre ellos')
//         return
//     }else if(A > B && A > C){
//         console.log(`El valor ${A} es el mayor`)
//     } else if(B > A && B > C){
//         console.log(`El valor ${B} es el mayor`)
//     } else if(C > A && C > B){
//         console.log(`El valor ${C} es el mayor`)
//     }
// }

// diferenciar()

//Presentar un mensaje de alerta en caso de que se detecte la introducción de valores iguales.

//Respuesta Alterna
let D = 0;
let E = 0;
let F = 0;

let array = [];

let meteOtroValor = () => {
  D = parseInt(prompt("Ingresa el primer valor"));
  E = parseInt(prompt("Ingresa el segundo valor"));
  F = parseInt(prompt("Ingresa el tercer valor"));

  if (D === E || E === F || D === F) {
    alert("Los valores deben ser distintos entre ellos");
    return;
  } else {
    array.push(D, E, F);
    console.log(array);

    let max = 0;

    let maximo = () => {
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        }
      }
    };
    
    maximo();
    console.log(max);

    console.log(Math.min(...array));
  }
};

meteOtroValor();
