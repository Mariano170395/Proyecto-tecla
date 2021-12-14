let usuarios = []
let id ={
    cont:0,
}

class Usuario {
    constructor(nombre, edad, email, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.pais = pais;
        this.id = id.cont;
    }
}

const nuevoUsuario = (nombre, edad, email, pais) => {
    usuarios.push(new Usuario(nombre, edad, email, pais))  
    id.cont ++
}

module.exports = {usuarios, nuevoUsuario}