//Declarar variables

let nombre;
let apellido;
let cursos;
let fechaDeNacimiento;

nombre = prompt('Ingresa tu nombre');
apellido = prompt('Ingresa tu apellido');
cursos = parseInt(prompt('Cuantos cursos has cursado?'));
fechaDeNacimiento = parseInt(prompt('En que año naciste?'));

//Sumar uno a los cursos
console.log(cursos + 1);

//Verificar año de nacimiento
if(fechaDeNacimiento < 2000){
   window.alert('¿Estas seguro que eres un programador Junior?"') 
} else{
    window.alert('Siuuuuuu')
}


