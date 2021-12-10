const express = require("express");
const server = express();

//Inicializar servidor

server.listen(3000, () => {
  console.log("Servidor inicializado");
});

//Endpoint home
server.get("/", (req, res) => {
  res.json("Holi esto es home");
});

//Middleware para validar datos
let auth = false;

let validar = (req, res, next) =>{
    if(auth === true){
        next()
    } else {
        res.json('Que haces aqui?')
    }
}

//Inicializo mi array
let usuarios = [
  {
    id: 1,
    nombre: "Danilo",
    email: "danilo@tecla.academy",
  },
  {
    id: 2,
    nombre: "Hugo",
    email: "Hugo@tecla.academy",
  },
  {
    id: 3,
    nombre: "Juan",
    email: "juan@tecla.academy",
  },
];


//filtro usuarios por id
let filtraUsers = (id) =>{
    for(let usuario of usuarios){
        if(id === usuario.id){
            return(usuario)
        }
    }
}

//filtro usuarios por nombre
let filtraUsersNombre = (nombre) =>{
    for(let usuario of usuarios){
        if(nombre === usuario.nombre){
            return(usuario)
        }
    }
}

//Endpoint para mostrar usuarios
server.get('/usuarios', validar, (req, res)=>{
    res.json(usuarios)
})

//endpoint id
server.get('/id', validar, (req, res)=>{
    res.json(filtraUsers(2))
})

//endpoint nombres
server.get('/nombre', validar, (req, res)=>{
    res.json(filtraUsersNombre('Hugo'))
})