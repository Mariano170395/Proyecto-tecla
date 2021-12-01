//Desarrollar un algoritmo (pseudocódigo) que permita leer tres valores de likes de la red social por foto y almacenarlos en las variables A, B y C respectivamente. 
let A = 0;
let B = 0;
let C = 0;

let ingresaValor = () =>{
    A = parseInt(prompt('Ingresa el Primer Valor'))
    B = parseInt(prompt('Ingresa el Segundo Valor'))
    B = parseInt(prompt('Ingresa el Tercer Valor'))
}



//NOTA: El algoritmo debe imprimir cuál es el mayor y cuál es el menor. Recuerda constatar que los tres valores introducidos por el teclado sean valores distintos. 
let diferenciar = () =>{
    ingresaValor()
    if(A === B || B === C || A === C){
        alert('Los valores deben ser distintos entre ellos')
        return
    }
}

diferenciar()


//Presentar un mensaje de alerta en caso de que se detecte la introducción de valores iguales.  
