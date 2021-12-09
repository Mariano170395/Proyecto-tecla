//Crear las clases y objetos necesarios para manejar los datos de los usuarios de la red social (perfil). 
class Usuario {
    constructor(Nombre, Apellidos, Edad, Email, Trabajas){
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Edad = Edad;
        this.Email = Email;
        this.Trabajas = Trabajas || false;
    }
}
//Crear un usuario de prueba con nombre: José Hernández.
    let Jose = new Usuario('Jose', 'Hernandez', '25', 'JoseHernandes@JoseHernandez.com', true)
    console.log(Jose)
    
//Solicitar al menos un atributo por teclado.
class UsuarioNuevo {
    constructor(Nombre1, Apellidos1, Edad1, Email1, Trabajas1){
        this.Nombre1 = Nombre1;
        this.Apellidos1 = Apellidos1;
        this.Edad1 = Edad1;
        this.Email1 = Email1;
        this.Trabajas1 = Trabajas1;
    }
}
let enviar = () =>{


let Seyor = new UsuarioNuevo(
    Nombre1 = document.getElementById('nombreDatos').value,
    Apellido1 = document.getElementById('apellidosDatos').value,
    Edad1 = document.getElementById('edadDatos').value,
    Email1 = document.getElementById('emailDatos').value,
    // Trabajas1 = prompt('Trabajas?')
    );
    console.log(Seyor)
}

