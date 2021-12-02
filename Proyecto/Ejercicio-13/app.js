//Desarrollar una función llamada “calcular” que recibe 2 parámetros: 

// El primero: un número entero con la cantidad de amigos del Tecler.
// El segundo: una función que utilizaremos como callback.

//Mostrar los siguientes console.log dentro de cada función:

// Hola Tecler
// Hola callback


let callBack = () =>{
    console.log('Hola callback')
}

let calcular = () =>{
    let amigos1 = document.getElementById('amigos1').value
    if(amigos1 == ''){
        alert('Ingresa un numero')
    } else if (isNaN(amigos1)){
        alert('El valor debe ser un numero')
    } else{
        alert(`Hola Teclanauta tienes ${amigos1} amigos`)
    }
    
    setTimeout(() => {
        callBack()
    }, 3000);
}

