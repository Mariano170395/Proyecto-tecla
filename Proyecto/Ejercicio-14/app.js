const url = 'https://randomuser.me/api/';
let resultado;

let getUsuarioRandom = ()=>{
    let urlUser = url 

    fetch(urlUser)
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            resultado = json
        })
        .catch(error =>{
            console.log('noooooooo')
        })
}

getUsuarioRandom()
console.log(resultado)