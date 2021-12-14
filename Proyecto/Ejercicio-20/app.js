const express = require('express');
const server = express();
//Llamo a mi middleware
const midd = require('./Middleware/midd')
//Llamo mi db
const db = require('./db/db')
 //llamo mi middleware Json
 //le digo a mi app que use este metodo
 server.use(express.json())
// Uso mi middleware de manera global, para usarlo localmente erver.get('/',midd.log, (req,res) 
 server.use(midd.log)



server.listen(3000, ()=>{
    console.log('Bienvenido al server Teclanauta')
})
//Get
server.get('/users', (req,res)=>{
    res.send(db.usuarios)
})

server.get('/users/:id',(req, res)=>{
    const {id} = req.params
    res.send(db.usuarios.find(user => user.id == id))
})
//Post
server.post('/users', (req,res)=>{
    db.nuevoUsuario(req.body.nombre, req.body.edad, req.body.email, req.body.pais)
    res.send(
        `Bienvenid@ ${req.body.nombre} !`
    )

})

server.put('/users/:id', (req, res)=>{
    const {id} = req.params
    const update = req.body
    const user = db.usuarios.find(user => user.id == id)
    Object.keys(update).map(dato=>{
        if(dato != 'id') user[dato] = update[dato]
    })
    res.send(`Has actualizado tu user`)
})


//Delete
server.delete('/users/:id', (req, res)=> {
    db.usuarios = db.usuarios.filter(user=> user.id != req.params.id)
    res.send('Has borrado el user')
})
